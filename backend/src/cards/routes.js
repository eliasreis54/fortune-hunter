const express = require('express')
const R = require('ramda')
const cardRepository = require('./repository')
const cardService = require('./service')

const cardRouter = express.Router()

const checkIfIdIsNull = id => R.pipe(
  cardRepository.findById,
  R.then(R.isNil),
)(id)

const getCarIdFromRequest = req => R.path(['params', 'id'], req)

cardRouter.get('/cards', (req, res) => cardRepository.fetchAll()
  .then(data => res.json(data))
  .catch(err => res.status(400).json(err)))


cardRouter.post('/cards', (req, res) => {
  const card = R.path(['body'], req)
  return cardService.create(card)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err))
})


cardRouter.put('/cards/:id', (req, res) => {
  const cardId = getCarIdFromRequest(req)
  const cardUpdater = R.path(['body'], req)
  return cardService.update(cardId, cardUpdater)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err))
})


cardRouter.delete('/cards/:id', async (req, res) => {
  const cardId = getCarIdFromRequest(req)
  const exist = R.not(await checkIfIdIsNull(cardId))
  const destroyObject = async () => {
    try {
      await cardService.destroy(cardId)
      return res.status(204).json()
    } catch (err) {
      return res.status(400).json(err)
    }
  }
  const returnNotExist = () => res.status(404).json()
  R.ifElse(
    R.equals(true),
    destroyObject,
    returnNotExist,
  )(exist)
})

module.exports = { cardRouter }
