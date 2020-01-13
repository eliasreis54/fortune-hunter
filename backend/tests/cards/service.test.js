const db = require('../../src/db/models')
const { Cards } = require('../../src/db/models')
const cardService = require('../../src/cards/service')
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
		await db.sequelize.close()
	})


  test('test create card', async () => {
    const created = await cardService.create(card)
    const records = await cardRepository.fetchAll()
    expect(records.length).toBe(1)
  })

  test('test if destroy will destroy the correct record', async () => {
    await cardService.create(card)
    await cardService.create(card)
    const records = await cardRepository.fetchAll()
    expect(records.length).toBe(2)
    await cardService.destroy(1)
  })
})
