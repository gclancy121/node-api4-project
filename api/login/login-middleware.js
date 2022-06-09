// write middleware here
const Users = require('../users/users-model');

function validateLogin (req, res, next) {
Users.findUsersByName(req.body.username).then(user => {
 if (user.length === 0) {
  res.status(400).json({message: 'invalid username'});
 } else {
  if (req.body.password !== user[0].password) {
    res.status(400).json({message: 'invalid password'});
  } else {
    req.validLogin = {id: user[0].id, username: user[0].username, password: user[0].password}
  }
 }
 next();
})
}


module.exports = {
validateLogin,
}