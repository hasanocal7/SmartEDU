const express = require('express')
const authController = require('../controller/authController');
const courseController = require('../controller/courseController');
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();

router.route('/signup').post(authController.createUser);
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage);
router.route('/users/courses/:slug').get(courseController.getCourse)

module.exports = router;