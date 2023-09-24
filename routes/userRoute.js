const express = require('express')
const authController = require('../controller/authController');

const router = express.Router();

router.route('/signup').post(authController.createUser) 

module.exports = router;