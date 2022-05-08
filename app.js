if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.MONGO_URI || process.env.DB_LOCAL_URL;

if (process.env.NODE_ENV !== 'test') {
    mongoose.connect(DB_URL)
        .then(() => console.log('Database connected'))
        .catch(() => console.log('Error connecting to database'));
}

const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');

const config = {
    origin: 'http://localhost:3000',
    credentials: true
}

app.use(cors(config));
app.use(cookieParser());
app.use(express.json());

app.use('/api', movieRoutes);
app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

module.exports = app;