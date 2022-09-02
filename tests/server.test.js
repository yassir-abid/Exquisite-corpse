/* eslint-disable no-undef */

/* supertest allows to simulate (mock) a web server */
const supertest = require('supertest');

const app = require('../app/app');

describe('GET /cadex', () => {
    it('should send an non empty string', async () => {
        const response = await supertest(app).get('/cadex');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});
