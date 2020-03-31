const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
const { MessagingResponse } = require('twilio').twiml
const { pgClient } = require('../helpers/queries')

function handleSendMessage () {
  client.messages
    .create({
      from: `whatsapp:${process.env.TWILIO_NUMBER}`,
      body: 'Hello there!',
      to: `whatsapp:${process.env.USER_NUMBER}`
    })
    .then(message => console.log(message.sid))
}

async function getLatestNumbers () {
  let result
  try {
    result = await pgClient.query('SELECT * from cases')
  } catch (error) {
    console.log(error)
  }
  const number = result.rows[0].number || ''
  return twilioMessage(`There are a total of ${number} cases.`)
}

function twilioMessage (text) {
  const message = new MessagingResponse().message(text)
  return message
}

module.exports = {
  handleSendMessage,
  getLatestNumbers,
  twilioMessage
}
