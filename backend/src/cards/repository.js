const { Cards } = require('../db/models')

const findById = id => Cards.findOne({
  where: id,
})

const fetchAll = () => Cards.findAll()

module.exports = {
  findById,
  fetchAll,
}
