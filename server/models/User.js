const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Student = require('./Student');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  mobile: {
    type: String,
    required: true,
    unique: true // does not allow duplicate mobile number
  },
  postCode: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // does not allow duplicate email
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Student'
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;