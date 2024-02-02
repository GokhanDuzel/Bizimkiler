const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  url: {
    type: String,
    required: true
  },
  // Any other fields you need
});

module.exports = mongoose.model('Book', bookSchema);
