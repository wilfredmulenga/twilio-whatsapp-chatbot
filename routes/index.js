var express = require('express')
var router = express.Router()
const messages = require('../messages')
const { MessagingResponse } = require('twilio').twiml

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

function twilioMessage (text) {
  const message = new MessagingResponse().message(text)
  return message
}

router.post('/', function (req, res) {
  const { body } = req
  console.log('body', body)
  switch (body) {
    case 'hey':
      res.send(twilioMessage(messages.welcome).toString()).status(200)
      break
    default:
      res.send(twilioMessage('Sorry, I didnt get that. Send 0 for Menu').toString()).status(200)
  }
})
module.exports = router
