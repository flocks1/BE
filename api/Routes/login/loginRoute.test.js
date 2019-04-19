const request = require('supertest');
const db = require('../../../data/dbConfig');

const server = require('../../../server/server');

describe('login route', () => {

    it('should login succesfull', () => {
        return request(server)
            .post('/login')
            .send({ username: "Ben 8716", password: "Test" })
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200);
    })
})