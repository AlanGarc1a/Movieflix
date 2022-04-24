const express = require('express');
const axios = require('axios');
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


module.exports = router;