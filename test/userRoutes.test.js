const request = require('supertest');
const app = require('../app');
const db = require('./db');
const User = require('../models/User');
const { generateToken } = require('../utils/helpers');

//pass agent for each test
const agent = request.agent(app);

beforeAll(async () => await db.connect());
beforeEach(async () => await db.dropCollections());
afterAll(async () => await db.dropDatabase());

describe('User API', () => {
    it('should store user a new user', async () => {
        const newUser = {
            email: 'test@test.com',
            username: 'test',
            password: 'password'
        }

        const res = await agent.post('/api/users/register').send(newUser)
        expect(res.statusCode).toBe(200);
        expect(res.body.savedUser.username).toBe('test');
        expect(res.body.savedUser.email).toBe('test@test.com');
        expect(res.header['set-cookie']).toBeDefined();
    });

    it('should login a user', async () => {
        const newUser = {
            email: 'test@test.com',
            username: 'test',
            password: 'password'
        }

        const token = generateToken(newUser);

        const res = await agent.post('/api/users/login').send(newUser).set('Cookie', token);
        expect(res.statusCode).toBe(201);
    });
});