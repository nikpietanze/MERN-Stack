const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// Database Config
const db = config.get('mongoURI');

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected.'))
  .catch(err => console.log(err));

// Use Routes
// Tells the server that anything going to the /api/items URL should refer to our items variable.
// Repeat for necessary URLs / pages
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets to any URL other than /api/items if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Define the server port
const port = process.env.PORT || 5000;

// Init the server
app.listen(port, () => console.log(`Server started on port ${port}`));
