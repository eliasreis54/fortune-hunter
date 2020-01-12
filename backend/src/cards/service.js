const { Cards } = require('../db/models')

const create = card => Cards.create(card)

const destroy = id => Cards.destroy({
  where: {
    id,
  },
})

const update = (id, card) => Cards.update(card, {
  where: {
    id,
  },
})

module.exports = {
  create,
  destroy,
  update,
}
