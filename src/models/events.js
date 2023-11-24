const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  maxSeats: {
    type: Number,
    required: true,
  },
  bookedSeats: {
    type: Number,
    required: true,
    default: 0,
  },
  maxWaitlist: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  tags: [
    {
      type: String,
      required: false,
    },
  ],
}, {
  timestamps: true, // Automatically add 'createdAt' and 'updatedAt' fields
});

// Create the Event model
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;