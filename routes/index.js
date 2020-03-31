var express = require('express')
var router = express.Router()
const messages = require('../messages')
const { twilioMessage } = require('../helpers')

router.post('/', async function (req, res) {
  const { Body } = req.body
  const option = Body.toLowerCase()

  switch (option) {
    case 'corona':
    case 'hey':
      res.send(twilioMessage(messages.welcome).toString()).status(200)
      break
    case '0':
    case 'yes':
      res.send(twilioMessage(messages.mainMenu).toString()).status(200)
      break
    case '1':
      res.send(twilioMessage(messages.one).toString()).status(200)
      break
    case '2':
      res.send(twilioMessage(messages.two).toString()).status(200)
      break
    case '3':
      res.send(twilioMessage(messages.three).toString()).status(200)
      break
    case '4':
      res.send(twilioMessage(messages.four).toString()).status(200)
      break
    case '5':
      res.send(twilioMessage(messages.five).toString()).status(200)
      break
    case '6':
      res.send(twilioMessage(messages.six).toString()).status(200)
      break
    case '7':
      res.send(twilioMessage(messages.seven).toString()).status(200)
      break
    case '8':
      res.send(twilioMessage(messages.eight).toString()).status(200)
      break
    default:
      res.send(twilioMessage(messages.sorry).toString()).status(200)
  }
})
module.exports = router
