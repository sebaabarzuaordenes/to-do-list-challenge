const md5 = require('md5');
async function createUser(user, userRepository) {
  if (!user) {
    throw new Error('User does not be falsy.');
  }
  if (!user.name || !user.userName || !user.password || !user.profile) {
    throw new Error('All fields are required.');
  }

  user.password = md5(user.password);
  const response = await userRepository.create(user);
  return response;
  
}

module.exports = createUser;
