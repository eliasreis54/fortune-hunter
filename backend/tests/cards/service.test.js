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

describe('tests cards service functions', () => {
  afterEach(async () => {
		await Cards.destroy({ where: { id: {[db.Sequelize.Op.gt]: 0} }, trucate: true, restartIdentity: true })
	})

	afterAll(async () => {
		await Cards.destroy({ where: { id: {[db.Sequelize.Op.gt]: 0} }, trucate: true, restartIdentity: true })
	})

  beforeAll(async () => {
		await Cards.destroy({ where: { id: {[db.Sequelize.Op.gt]: 0} }, trucate: true, restartIdentity: true })
  })

	afterAll(async (done) => {
		await Cards.destroy({ where: { id: {[db.Sequelize.Op.gt]: 0} }, trucate: true, restartIdentity: true })
    done() 
	})


  test('test create card', async () => {
    const created = await cardService.create(card)
    expect(created).not.toBeNull()
		await Cards.destroy({ where: { id: {[db.Sequelize.Op.gt]: 0} }, trucate: true, restartidentity: true })
  })

  test('test if destroy will destroy the correct record', async () => {
    const data1 = await cardService.create(card)
    const data2 = await cardService.create({...card, name: 'teste' })
    const records = await cardRepository.fetchAll()
    expect(records.length).toBe(2)
    await cardService.destroy(data1.id)
    const newRecords = await cardRepository.fetchAll()
    expect(newRecords.length).toBe(1)
		await Cards.destroy({ where: { id: {[db.Sequelize.Op.gt]: 0} }, trucate: true, restartidentity: true })
  })


  test('test if update will update the correct record', async () => {
    const created = await cardService.create(card)
    const newCreated = {
      ...card,
      name: 'card',
    }
    await cardService.update(created.id, newCreated)
    const find = await cardRepository.findById(created.id)
    expect(find.name).toBe('card')
		await Cards.destroy({ where: { id: {[db.Sequelize.Op.gt]: 0} }, trucate: true, restartidentity: true })
  })
})
