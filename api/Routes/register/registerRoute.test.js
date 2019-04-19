const request = require('supertest');
const db = require('../../../data/dbConfig');

const server = require('../../../server/server');


describe('register route', () => {
    it('should register succesfull', () => {
        return request(server)
            .post('/register')
            .send({ username: `Ben ${Math.floor(Math.random() * 10000)}`, password: "Test" })
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
    })
})