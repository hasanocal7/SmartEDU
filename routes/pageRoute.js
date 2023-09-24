// Express Module
const express = require('express')

// Controller Module
const pageController = require('../controller/pageController')

// Router
const router = express.Router()

router.route('/').get(pageController.getHomePage);
router.route('/about').get(pageController.getAboutPage);
router.route('/register').get(pageController.getRegisterPage);

module.exports = router;