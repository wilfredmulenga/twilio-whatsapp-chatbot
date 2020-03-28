const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

function handleSendMessage () {
  client.messages
    .create({
      from: `whatsapp:${process.env.TWILIO_NUMBER}`,
      body: 'Hello there!',
      to: `whatsapp:${process.env.USER_NUMBER}`
    })
    .then(message => console.log(message.sid))
}

module.exports = {
  handleSendMessage
}
