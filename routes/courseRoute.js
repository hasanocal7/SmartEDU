const express = require('express')
const courseController = require('../controller/courseController');

const router = express.Router();

router.route('/').post(courseController.createCourse) // http://localhost:3000/courses
router.route('/').get(courseController.getAllCourses)
router.route('/:slug').get(courseController.getCourse)

module.exports = router;