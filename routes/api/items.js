const express = require('express');
const auth = require('../../middleware/auth');

const router = express.Router();

// Brings in our Item Model
// We use a capital letter for model variables
const Item = require('../../models/Item');
console.log(`Item: ${Item}`);

// @route GET request to api/items
// @desc Gets All Items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route POST request to api/items
// @desc Create an Item
// @access Private
router.post('/', auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  // Saves our newItem variable to the database
  newItem.save().then(item => res.json(item));
});

// @route DELETE request to api/items/:id
// @desc Delete an Item
// @access Private
router.delete('/:id', auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ msg: err, success: false }));
});

module.exports = router;
