const Users = require('./users-model');

function validateName (req, res, next) {
  Users.findUsersByName(req.body.username).then(users => {
    if (users.length !== 0) {
      res.status(400).json({message: 'user already exists'});
      return;
    } else {
      req.newUser = req.body;
    }
    next();
  })
}
module.exports = {
  validateName,
  
}