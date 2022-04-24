if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

const movieRoutes = require('./routes/movieRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', movieRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static('build'));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

module.exports = app;