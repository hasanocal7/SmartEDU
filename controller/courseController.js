const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      name: req.body.name,
      description: req.body.description,
    });
    console.log('Kayıt başarılı')
    res.status(201).json({
      status: 'success',
      course,
    });
  } catch {
    res.status(400).json({
      status: 'fail',
      error,
    })
  }
};
