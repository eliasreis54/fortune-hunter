const { Cards } = require('../db/models')

const create = card => Cards.create(card)

const destroy = cardId => Cards.destroy({
  where: {
    id: cardId,
  },
})

const update = (cardId, card) => Cards.update(card, {
  where: {
    id: cardId,
  },
})

module.exports = {
  create,
  destroy,
  update,
}
