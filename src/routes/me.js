const express = require('express');
const router = express.Router();
const meControllers = require('../app/comtrollers/MeController');
router.get('/stored/courses', meControllers.storedCourses);
router.get('/trash/courses', meControllers.trashCourses);

module.exports = router;
