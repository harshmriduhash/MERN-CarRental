const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carName: {
    type: String,
    required: true,
  },
  carModel: {
    type: String,
    required:true,
  },
  plateNumber: {
    type: String,
    required: true,
    unique: true
  },
  fuelType: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true
  },
  coveredDistance: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now
  },
  isRented: {
    type: Boolean
  }
})

module.exports = mongoose.model('Car', carSchema);