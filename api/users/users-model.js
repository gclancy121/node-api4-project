const users = [
{
  id: 1,
  username: 'gage',
  password: 'bloomtech'
},
{
  id: 2,
  username: 'sachi',
  password: 'anime'
},
{
  id: 3,
  username: 'adam',
  password: 'airplane'
}
];


async function findUsers() {
  return users;
};

async function addUser(user) {
  const newUser = {
    id: Date.now(),
    username: user.username,
    password: user.password
  };

  users.push(newUser);
  return newUser;
}

module.exports = {
  addUser,
  findUsers,
  
}