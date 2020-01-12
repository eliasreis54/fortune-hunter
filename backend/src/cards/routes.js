const express = require('express')
const cardRepository = require('./repository')
const cardService = require('./service')

const cardRouter = express.Router()

cardRouter.get('/cards', (req, res) => cardRepository.fetchAll()
  .then(data => res.json(data))
  .catch(err => res.status(400).json(err)))


cardRouter.post('/cards', (req, res) => {
  const card = req.body
  return cardService.create(card)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err))
})


cardRouter.put('/cards/:id', (req, res) => {
  const cardId = req.params.id
  const cardUpdater = req.body
  return cardService.update(cardId, cardUpdater)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err))
})


cardRouter.delete('/cards/:id', async (req, res) => {
  const cardId = req.params.id
  try {
    await cardService.destroy(cardId)
    return res.status(204).json()
  } catch (err) {
    return res.status(400).json(err)
  }
})

module.exports = { cardRouter }
