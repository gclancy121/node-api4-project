const data = require('../../data/data');

function findUsers() {
  return data;
};

function addUser(user) {
  const newUser = {
    id: Date.now(),
    username: user.username,
    password: user.password
  };

  data.push(newUser);
  return newUser;
}

module.exports = {
  addUser,
  findUsers,
  
}