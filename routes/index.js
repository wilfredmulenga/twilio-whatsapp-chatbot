var express = require('express')
var router = express.Router()
const messages = require('../messages')
const { MessagingResponse } = require('twilio').twiml
const { pgClient } = require('../helpers/queries')

router.get('/', async function (req, res, next) {
  res.render('index', { title: 'Express' })
})

function twilioMessage (text) {
  const message = new MessagingResponse().message(text)
  return message
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

router.post('/', async function (req, res) {
  const { Body } = req.body
  const option = Body.toLowerCase()

  if (req.session.option && req.session.option === 'f') {
    if (option === 'a') {
      res.send(twilioMessage(messages.FA).toString()).status(200)
    }
  }

  req.session.option = option

  let latestNumbers
  switch (option) {
    case 'corona':
    case 'hey':
      res.send(twilioMessage(messages.welcome).toString()).status(200)
      break
    case 'yes':
      res.send(twilioMessage(messages.mainMenu).toString()).status(200)
      break
    case '1':
      res.send(twilioMessage(messages.one).toString()).status(200)
      break
    case '2':
      res.send(twilioMessage(messages.one).toString()).status(200)
      break
    case 'f':
      res.send(twilioMessage(messages.F).toString()).status(200)
      break
    default:
      res.send(twilioMessage('Sorry, I didnt get that. Send 0 for Menu').toString()).status(200)
  }
})
module.exports = router
