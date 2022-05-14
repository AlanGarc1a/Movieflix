const request = require('supertest');
const app = require('../app');
const User = require('../models/User');
const { generateToken } = require('../utils/helpers');
const db = require('./db');


//executed before ou test suites
beforeAll(async () => await db.connect());

//runs after each test suite
afterEach(async () => await db.dropCollections());

//executed after all test suites have finished
afterAll(async () => await db.dropDatabase());

const userData = {
    email: 'test@test.com',
    username: 'test',
    password: 'password'
}

describe('API routes', () => {
    it('should return a list of 250 movies', async () => {
        const res = await request(app).get('/api/discover');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.body.items.length).toBe(250);
    })

    it('should return a list of popular-movies', async () => {
        const res = await request(app).get('/api/popular-movies/');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    })

    it('should return a list of popular shows', async () => {
        const res = await request(app).get('/api/popular-shows/');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    })

    it('should return the item the specified id', async () => {
        const item = {
            id: 'tt1375666',
            title: 'Inception',
            year: '2010'
        }
        const res = await request(app).get(`/api/get-movie/${item.id}`);
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.body.id).toBe(item.id);
        expect(res.body.title).toBe(item.title);
        expect(res.body.year).toBe(item.year);
    })

    it('should return the movie that was searched', async () => {
        const term = 'inception'
        const res = await request(app).get(`/api/movie-search/${term}`);

        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.body.searchType).toBe('Movie');
        expect(res.body.expression).toBe(term);
    })

    it('should return the series that was searched', async () => {
        const term = 'lost';
        const res = await request(app).get(`/api/show-search/${term}`);
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.body.searchType).toBe('Series');
        expect(res.body.expression).toBe(term);
    })

    it('should like the movie', async () => {
        await request(app).post('/api/users/register').send(userData);
        const media = {
            imdbId: '1',
            imdbTitle: 'Dragon',
            image: 'image-string',
            imdbRating: '10',
            username: userData.username
        }

        const res = await request(app).post('/api/like-movie').send(media)
        expect(res.body.isLiked).toBe(true)
    })

    it('should un-like the movie', async () => {
        await request(app).post('/api/users/register').send(userData);
        const media = {
            imdbId: '1',
            username: userData.username
        }

        const res = await request(app).post('/api/unlike-movie').send(media)
        expect(res.body.isLiked).toBe(false);
    })
});