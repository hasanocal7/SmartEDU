// Express Module
const express = require('express')

// Controller Module
const pageController = require('../controller/pageController')

// Middleware Module
const redirectMiddleware = require('../middlewares/redirectMiddleware')

// Router
const router = express.Router()

router.route('/').get(pageController.getHomePage);
router.route('/about').get(pageController.getAboutPage);
router.route('/register').get(redirectMiddleware, pageController.getRegisterPage);
router.route('/login').get(redirectMiddleware, pageController.getLoginPage);


module.exports = router;