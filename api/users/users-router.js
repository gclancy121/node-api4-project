const express = require('express');
const Users = require('./users-model');

const router = express.Router();


router.get('/', (req, res, next) => {
  Users.findUsers().then(users => {
    res.status(200).json(users);
  })
  .catch(error => next(error));
});

router.post('/', (req, res, next) => {
  Users.addUser(req.body).then(result => {
    res.status(201).json(result);
  }).catch(err => next(err));
})



module.exports = router;