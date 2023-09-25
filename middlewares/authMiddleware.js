const User = require('../models/User');

module.exports = async (req, res, next) => {
    try {
      const userId = req.session.userID;
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
