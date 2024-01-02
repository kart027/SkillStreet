const express = require('express');
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/notesRoutes');
const {connectDb} = require("./config/database")
require("dotenv").config({
    path: "./config/config.env"
});

const app = express();
connectDb();
// Middleware
app.use(bodyParser.json());


// Use routes
app.use('/api', noteRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;