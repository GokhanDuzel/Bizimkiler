const express = require('express');
const cors = require('cors');

const booksRoutes = require('./routes/books');

const app = express();

// Allow requests from 'http://localhost:3001'
app.use(cors({
    origin: 'http://localhost:3001', // Replace with the actual origin of your React app
}));

app.use(express.json());

// Use books routes
app.use('/api/books', booksRoutes);

module.exports = app;
