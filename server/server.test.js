const server = require('./server');
const request = require('supertest');

describe('server', () => {
    it('is the right enviroment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })
})