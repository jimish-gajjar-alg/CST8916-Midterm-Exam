const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const studentRoutes = require('./routes');

// Middleware to parse JSON
app.use(bodyParser.json());

// Use routes
app.use('/', studentRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
