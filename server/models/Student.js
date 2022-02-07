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
    type: String,
    required: true,
  },
  classes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Class'
    }
  ]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;