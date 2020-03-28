var express = require('express')
var router = express.Router()
const { MessagingResponse } = require('twilio').twiml

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/', function (req, res) {
  console.log('body', req.body)

  const message = new MessagingResponse().message("Thanks for the image! Here's one for you!")

  res.set('Content-Type', 'text/xml')
  res.send(message.toString()).status(200)
})
module.exports = router
