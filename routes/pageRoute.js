// Express Module
const express = require('express')

// Controller Module
const pageController = require('../controller/pageController')

// Router
const router = express.Router()

router.route('/').get(pageController.getHomePage);
router.route('/about').get(pageController.getAboutPage);
router.route('/courses').get(pageController.getCoursesPage);
router.route('/dashboard').get(pageController.getDashboardPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/login').get(pageController.getLoginPage);
router.route('/register').get(pageController.getRegisterPage);
router.route('/course-single').get(pageController.getCourseSinglePage);

module.exports = router;