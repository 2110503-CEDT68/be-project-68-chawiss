const express = require('express');

// 1. เปลี่ยนชื่อฟังก์ชันที่ดึงมาให้ตรงกับที่เขียนไว้ใน Controller (ใช้ Booking แทน Appointment)
// 2. เช็คชื่อไฟล์ที่ require ให้ตรงกับที่มีในโฟลเดอร์ controllers (มักจะมี s)
const { 
  getBookings, 
  getBooking, 
  addBooking, 
  updateBooking, 
  deleteBooking 
} = require('../controllers/booking'); 

const router = express.Router({ mergeParams: true });
const { protect, authorize } = require('../middleware/auth');

// 3. เปลี่ยนชื่อฟังก์ชันใน handler ให้ตรงตามด้านบน
router.route('/')
  .get(protect, getBookings) 
  .post(protect, authorize('admin', 'user'), addBooking);

router.route('/:id')
  .get(protect, getBooking)
  .put(protect, authorize('admin', 'user'), updateBooking)
  .delete(protect, authorize('admin', 'user'), deleteBooking);

module.exports = router;