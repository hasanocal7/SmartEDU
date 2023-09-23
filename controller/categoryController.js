const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create({
      name: req.body.name,
    });
    res.status(201).json({
      status: 'success',
      category,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    })
  }
};