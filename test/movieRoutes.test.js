const request = require('supertest');
const app = require('../app');

describe('API routes', () => {
    it('should return a list of 250 movies', async () => {
        const res = await request(app).get('/api/discover/');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res._body.items.length).toBe(250);
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
        expect(res._body.id).toBe(item.id);
        expect(res._body.title).toBe(item.title);
        expect(res._body.year).toBe(item.year);
    })

    it('should return the movie that was searched', async () => {
        const term = 'inception'
        const res = await request(app).get(`/api/movie-search/${term}`);
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res._body.searchType).toBe('Movie');
        expect(res._body.expression).toBe(term);
    })

    it('should return the series that was searched', async () => {
        const term = 'lost';
        const res = await request(app).get(`/api/show-search/${term}`);
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res._body.searchType).toBe('Series');
        expect(res._body.expression).toBe(term);
    })
});