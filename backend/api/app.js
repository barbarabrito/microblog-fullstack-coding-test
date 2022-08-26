require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());

app.use(cors({ credentials: true, origin: '*' }));

app.get('/', (req, res) => {
    res.send('initial route')
})

const PostRoutes = require('../api/routes/PostRoutes')

app.use('/post', PostRoutes)


module.exports = app