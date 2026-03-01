const express = require('express');
const { getUsers, getUser} = require('../controllers/user');

const router = express.Router();

// นำเข้า Middleware ปกป้อง Route (สมมติว่าคุณมีไฟล์นี้อยู่แล้ว)
const { protect, authorize } = require('../middleware/auth');

// กำหนดว่าทุกเส้นทางในไฟล์นี้ต้อง Protect และเป็น Admin เท่านั้น
router.use(protect);
router.use(authorize('admin'));

router.route('/').get(getUsers);
router.route('/:id').get(getUser);

module.exports = router;