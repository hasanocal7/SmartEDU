const express = require('express')
const courseController = require('../controller/courseController');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();


router.route('/').post(roleMiddleware(["teacher", "admin"]), courseController.createCourse); // http://localhost:3000/courses
router.route('/').get(courseController.getAllCourses)
router.route('/:slug').get(courseController.getCourse)
router.route('/enroll').post(courseController.EnrollCourse)
router.route('/release').post(courseController.releaseCourse);
router.route('/:slug').delete(courseController.deleteCourse);

module.exports = router;