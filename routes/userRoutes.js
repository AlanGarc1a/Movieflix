const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const User = require('../models/User');

const { generateToken, verifyToken } = require('../utils/helpers');
const { authorization } = require('../middlewares/middlewares');

router.post('/register', async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const cookie = req.cookies.token;

        const foundEmail = await User.findOne({ email });
        const foundUsername = await User.findOne({ username });

        if (foundEmail) {
            return res.status(400).json({ msg: 'Email already in use' });
        }
        if (foundUsername) {
            return res.status(400).json({ msg: 'Username already taken' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            username: username.toLowerCase(),
            password: hashPassword
        });

        const savedUser = await newUser.save();
        const token = generateToken(savedUser);

        if (cookie === undefined) {
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production'
            })
        }

        if (savedUser) {
            return res.status(200).json({ savedUser });
        }

    } catch (error) {
        next(error);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const existingUser = await User.findOne({ username: username.toLowerCase() });

        if (!existingUser) {
            return res.status(400).json({ msg: 'Invalid Username/password' });
        }

        if (existingUser && (await existingUser.matchPassword(password))) {
            const token = generateToken(existingUser);
            const cookie = req.cookies.token;

            if (cookie === undefined) {
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production'
                })
            }

            return res.status(201).json({
                existingUser
            });
        } else {
            return res.status(401).json({ msg: 'Invalid Username/password' });
        }

    } catch (error) {
        next(error);
    }
});

router.get('/logout', authorization, (req, res) => {
    return res.clearCookie('token').status(200).json({ msg: 'logout' });
});

router.get('/isAuth', async (req, res) => {
    const reqToken = req.cookies.token;
    let auth = false;

    if (!reqToken) {
        return res.status(403).json({ msg: 'Please login' });
    }

    try {
        if (!verifyToken(reqToken, process.env.JWT_SECRET)) {
            res.status(403).json({ msg: 'Invalid session' })
        }
        else {
            auth = true;
        }
    } catch (error) {
        res.status(403).json({ msg: 'Invalid session' })
    }

    if (!auth) {
        return res.status(400).json({ msg: 'token verification failed' });
    }
    else {
        const data = verifyToken(reqToken, process.env.JWT_SECRET);

        const user = await User.findById(data.id)

        if (!user) {
            return res.status(400).json({
                msg: 'User not found'
            })
        }

        res.status(200).json({ username: data.username });
    }
});

module.exports = router;
