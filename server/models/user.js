const mongoose = require('mongoose');

const User = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  clerkId: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Pincode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', User);