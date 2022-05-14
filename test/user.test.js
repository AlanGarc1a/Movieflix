const db = require('./db');
const User = require('../models/User');
const mongoose = require('mongoose');

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

/* 
    User model
*/
describe('User Schema', () => {
    it('should create a new user and save successfully', async () => {
        const validUser = new User(userData);
        const savedUser = await validUser.save();

        expect(savedUser._id).toBeDefined();
        expect(savedUser.email).toBe(userData.email);
        expect(savedUser.username).toBeDefined();
        expect(savedUser.likes).toBeDefined();
        expect(savedUser.likes.length).toBe(0);
    });

    it('should fail when an unknown field is added to schema', async () => {
        const unknownField = new User({
            email: 'alan@gmail.com',
            username: 'alan',
            password: 'password',
            nickname: 'test_man'
        });

        const saveUnknownField = await unknownField.save();
        expect(saveUnknownField._id).toBeDefined();
        expect(saveUnknownField.nickname).toBeUndefined();
    });

    it('should fail if a field is not present', async () => {
        const userWithoutAField = new User({ username: 'Gogeta' });

        let err;

        try {
            const saveUserWithRequiredField = await userWithoutAField.save();
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        expect(err.errors.email).toBeDefined();
    });
})