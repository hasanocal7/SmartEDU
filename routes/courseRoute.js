// Express Module
const express = require('express')

// Controller Module
const courseController = require('../controller/courseController')

// Router
const router = express.Router()

router.route('/').post(courseController.createCourse); //http://localhost:3000/courses

module.exports = router;