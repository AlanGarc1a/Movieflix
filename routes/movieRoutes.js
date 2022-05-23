const express = require('express');
const axios = require('axios');
const User = require('../models/User');

const router = express.Router();

router.get('/popular-movies', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_MOVIE_API_KEY}`
    }

    axios.request(options).then(response => {
        res.status(200).json(response.data);
    }).catch(res => {
        res.status(404).json({ error: 'Not Found' });
    })
});

router.get('/popular-shows', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/MostPopularTVs/${process.env.REACT_APP_MOVIE_API_KEY}`
    }

    axios.request(options).then(response => {
        res.status(200).json(response.data);
    }).catch(res => {
        res.status(404).json({ error: 'Not Found' });
    })
});

router.get('/discover', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_MOVIE_API_KEY}`
    }

    axios.request(options).then(response => {
        res.status(200).json(response.data);
    }).catch(res => {
        res.status(404).json({ error: 'Not Found' });
    })
});

router.get('/get-movie/:movieId', (req, res) => {
    const { movieId } = req.params;

    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_MOVIE_API_KEY}/${movieId}/Trailer`
    }

    axios.request(options).then(response => {
        res.status(200).json(response.data);
    }).catch(res => {
        res.status(404).json({ error: 'Not Found' });
    })
});

router.get('/posters/:movieId', (req, res) => {
    const { movieId } = req.params;

    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/Posters/${process.env.REACT_APP_MOVIE_API_KEY}/${movieId}`
    }

    axios.request(options).then(response => {
        res.status(200).json(response.data);
    }).catch(res => {
        res.status(404).json({ error: 'Not Found' });
    })
});

router.get('/movie-search/:term', (req, res) => {
    const { term } = req.params

    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/SearchMovie/${process.env.REACT_APP_MOVIE_API_KEY}/${term}`
    }

    axios.request(options).then(response => {
        res.status(200).json(response.data);
    }).catch(res => {
        res.status(404).json({ error: 'Not Found' });
    })
});

router.get('/show-search/:term', (req, res) => {
    const { term } = req.params;
    const options = {
        method: 'GET',
        url: `https://imdb-api.com/en/API/SearchSeries/${process.env.REACT_APP_MOVIE_API_KEY}/${term}`
    }

    axios.request(options).then(response => {
        res.status(200).json(response.data);
    }).catch(res => {
        res.status(404).json({ error: 'Not Found' });
    })
});

router.post('/like-movie', async (req, res) => {
    let { id, title, image, imDbRating, username } = req.body;
    const foundUser = await User.findOne({ username })

    if (foundUser) {
        if (imDbRating === null) {
            imDbRating = 0;
        }
        foundUser.likes.push({
            id,
            title,
            image,
            imDbRating
        });

        await foundUser.save();

        return res.status(200).json({ isLiked: true });
    }
});

router.post('/unlike-movie', async (req, res) => {
    const { id, username } = req.body;
    const foundUser = await User.findOne({ username })
    if (foundUser) {
        foundUser.likes = foundUser.likes.filter(movie => {
            return movie.id !== id
        });

        await foundUser.save();

        return res.status(200).json({
            isLiked: false
        })
    }

    return res.status(401).json({ isLiked: false })
});

module.exports = router;