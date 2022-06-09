async function welcome(username) {
  const message = `Welcome, ${username}!`;
  return message; 
}

module.exports = welcome;