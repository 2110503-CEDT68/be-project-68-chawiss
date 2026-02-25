const express = require('express');

const {
  getDentists,
  getDentist,
  createDentist,
  updateDentist,
  deleteDentist
} = require('../controllers/dentists');

const appointmentRouter = require('./appointments');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

// || /api/v1/dentists/:dentistId/appointments
router.use('/:dentistId/appointments', appointmentRouter);

// || /api/v1/dentists
router.route('/').get(getDentists).post(protect, authorize('admin'), createDentist);

// || /api/v1/dentists/:id
router.route('/:id').get(getDentist).put(protect, authorize('admin'), updateDentist).delete(protect, authorize('admin'), deleteDentist);

module.exports = router;