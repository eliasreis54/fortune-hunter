const express = require('express')
const bodyParser = require('body-parser')
const { server } = require('./config.json')

const { cardRouter } = require('./src/cards/routes')

const app = express()

app.use(bodyParser.json())
app.use(cardRouter)
app.listen(server.port, () => console.log('server running'))

module.exports = {
  app,
}
