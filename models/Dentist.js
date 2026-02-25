const mongoose = require('mongoose');

const DentistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add dentist name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  experienceYears: {
    type: Number,
    required: [true, 'Please add years of experience'],
    min: [0, 'Experience cannot be negative']
  },
  expertise: {
    type: String,
    required: [true, 'Please add area of expertise'],
    trim: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Reverse populate with bookings
DentistSchema.virtual('appointments', {
  ref: 'Appointment',
  localField: '_id',
  foreignField: 'dentist',
  justOne: false
});

module.exports = mongoose.model('Dentist', DentistSchema);