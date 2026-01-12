const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

// Mongoose connection optimization for Serverless
let cachedPromise = null;

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    if (!cachedPromise) {
        cachedPromise = mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 5000 // Fail after 5 seconds instead of hanging
        })
            .then(() => console.log('MongoDB Connected'))
            .catch(err => {
                console.error('MongoDB Connection Error:', err);
                cachedPromise = null;
                throw err;
            });
    }

    await cachedPromise;
};

// Middleware to ensure DB is connected before handling requests
app.use(async (req, res, next) => {
    if (req.path.startsWith('/api')) {
        try {
            await connectDB();
        } catch (error) {
            console.error("Database connection failed inside middleware");
        }
    }
    next();
});

// Schema and Model
const Portfolio = require('./models/Portfolio');

// Routes
app.get('/api/portfolio', async (req, res) => {
    try {
        const profile = await Portfolio.findOne();
        res.json(profile);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
