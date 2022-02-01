const mongoose = require('mongoose');

const { Schema } = mongoose;

const studentSchema = new Schema({
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
  dateOfBirth: {
    type: Date,
    required: true,
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;