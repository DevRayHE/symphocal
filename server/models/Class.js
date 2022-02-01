const mongoose = require('mongoose');

const { Schema } = mongoose;

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  classDateTime: {
    type: Date,
    required: true
  },
  duration: {
    type: Number, // in minutes
    required: true
  },
  capacity: {
    type: Number, // 1 for individual class
    required: true
  },
  cost: {
    type: Number, //  divide by 100 to get the actual cost, such as 35 will be stored as 3500
    required: true
  },
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Student'
    }
  ]
});

const Class = mongoose.model('Class', userSchema);

module.exports = Class;