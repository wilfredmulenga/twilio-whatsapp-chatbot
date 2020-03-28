var express = require('express')
var router = express.Router()
const messages = require('../messages')
const { MessagingResponse } = require('twilio').twiml

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

function twilioMessage (text) {
  return new MessagingResponse().message(text)
}

router.post('/', function (req, res) {
  const { body } = req
  let message
  switch (body) {
    case 'hey':
      twilioMessage(messages.welcome)
      break
    default:
      twilioMessage('Sorry, I didnt get that. Send 0 for Menu')
  }

  res.set('Content-Type', 'text/xml')
  res.send(message.toString()).status(200)
})
module.exports = router
