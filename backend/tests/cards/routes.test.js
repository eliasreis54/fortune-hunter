const request = require('supertest')
const app = require('../../index')
const { Cards } = require('../../src/db/models')
const db = require('../../src/db/models')
const sequelize = require('sequelize')

const card = {
	name: "card1",
	coust: 1,
	attack: 123,
	income: 321
}

Cards.findById = jest.fn().mockImplementation(() => Promise.resolve(card))

describe('test cards router', () => {
  it('POST, /cards', (done) => {
    request(app.app)
      .post('/cards')
      .send({
        name: "card1",
        coust: 1,
        attack: 123,
        income: 321
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  })

  it('GET, /cards', (done) => {
    request(app.app)
      .get('/cards')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  })

  it('GET, /cards/{id}', async (done) => {
    request(app.app)
      .get('/cards/1')
      .expect(404)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  })
})
