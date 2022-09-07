const app = require('../api/app')
const request = require('supertest');
const mongoose = require('mongoose');

describe('Testing posts route', ()=> {

    beforeAll(() => {
        mongoose.connect('mongodb://localhost:27017/db_microblog_coding_test');
    });
    
    afterAll( async () => {
       mongoose.connection.close();
    });

    describe('POST /post', () => {
    
        it('should create a post', async () => {
            const response = await request(app)
            .post('/post/send')
            .send({
                text:'text content'
            })
            .set('Accept', 'application/json')
            expect(response.status).toBe(201)
        });
    
    });
    
    describe('POST error messages test', () => {
    
        it('should respond with a status code of 409 if required field (text) is missing', async () => {
            const post = {
                // text missing
            };
            const response = await request(app).post("/post/send").send(post)
            expect(response.statusCode).toBe(409)
        });

    });
});