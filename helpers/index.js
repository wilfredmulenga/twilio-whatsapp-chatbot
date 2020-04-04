const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
const { MessagingResponse } = require('twilio').twiml

function handleSendMessage () {
  client.messages
    .create({
      from: `whatsapp:${process.env.TWILIO_NUMBER}`,
      body: 'Hello there!',
      to: `whatsapp:${process.env.USER_NUMBER}`
    })
    .then(message => console.log(message.sid))
}

function twilioMessage (text) {
  const message = new MessagingResponse().message(text)
  return message
}

module.exports = {
  handleSendMessage,
  twilioMessage
}
