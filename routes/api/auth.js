const express = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

const router = express.Router();

// Brings in our Item Model
// We use a capital letter for model variables
const User = require('../../models/User');

// @route POST request to api/auth
// @desc Authenticate a User
// @access Public
router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Simple Validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for Existing User
  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: 'User does not exist' });

    // Validate Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

      jwt.sign(
        { id: user.id },
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          });
        }
      );
    });
  });
});

// @route GET request to api/auth/user
// @desc Get user data
// @access Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

module.exports = router;
