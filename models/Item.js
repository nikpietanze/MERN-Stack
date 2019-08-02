const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Export => Creates a Model in our database (item), and passes through our Schema that we defined
module.exports = Item = mongoose.model('item', ItemSchema);
