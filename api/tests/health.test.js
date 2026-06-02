const request = require("supertest");
const app = require("../app");


describe('Health endpoint', () => {

    test('GET /health should return service status', async () => {
        const response = await request(app).get('/health');

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('UP');
    });

});


describe('Root endpoint', () => {

    test('GET / should return API running message', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Docker Demo API is running.");
    });

});
