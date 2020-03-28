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
  let latestNumbers
  switch (Body) {
    case '0':
    case 'hey':
      res.send(twilioMessage(messages.welcome).toString()).status(200)
      break
    case '1':
      latestNumbers = await getLatestNumbers()
      res.send(latestNumbers.toString()).status(200)
      break
    default:
      res.send(twilioMessage('Sorry, I didnt get that. Send 0 for Menu').toString()).status(200)
  }
})
module.exports = router
