const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  },
  created: {
    type: Date,
    default: Date.now
  },
  rentedCars: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  }]
});

module.exports = mongoose.model('User', userSchema);