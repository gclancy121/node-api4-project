const express = require('express');
const Users = require('./users-model');
const {validateName} = require('./users-middleware');

const router = express.Router();


router.get('/', (req, res, next) => {
  Users.findUsers().then(users => {
    res.status(200).json(users);
  })
  .catch(error => next(error));
});

router.post('/', validateName, (req, res, next) => {
  Users.addUser(req.newUser).then(result => {
    res.status(201).json(result);
  }).catch(err => next(err));
})



module.exports = router;