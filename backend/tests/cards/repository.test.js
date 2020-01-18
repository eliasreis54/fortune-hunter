const db = require('../../src/db/models')
const { Cards } = require('../../src/db/models')
const cardRepository = require('../../src/cards/repository')

const card = {
	name: "card1",
	coust: 1,
	attack: 123,
	income: 321
}

describe('tests cards repository functions', () => {
  afterEach(async () => {
		await Cards.destroy({ where: { id: {[db.Sequelize.Op.gt]: 0} }, trucate: true, restartIdentity: true })
	})

	afterAll(async () => {
		await Cards.destroy({ where: { id: {[db.Sequelize.Op.gt]: 0} }, trucate: true, restartIdentity: true })
	})

  test('test if findById return the rigth record', async () => {
    const created = await Cards.create(card)
    const finded = await cardRepository.findById(created.id)
    expect(finded).not.toBeNull()
    expect(finded.name).toMatch(card.name)
  })

  test('test if findAll return all records', async () => {
    const created = await Cards.create(card)
    const finded = await cardRepository.fetchAll()
    expect(finded).not.toBeNull()
    expect(finded.length).toBe(1)
  })

  test('test if findById with incorect id return null', async () => {
    const finded = await cardRepository.findById(1)
    expect(finded).toBeNull()
  })

  test('test if findAll withOut records return empty array', async () => {
    const finded = await cardRepository.fetchAll()
    expect(finded.length).toBe(0)
  })
})
