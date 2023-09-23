const express = require('express')
const categoryController = require('../controller/categoryController');

const router = express.Router();

router.route('/').post(categoryController.createCategory) // http://localhost:3000/categories

module.exports = router;