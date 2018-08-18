const md5 = require('md5');
async function userCreate(user, userRepository) {
  if (!user) {
    throw new Error('User does not be falsy.');
  }
  user.password = md5(user.password);
  return await userRepository.create(user);
}

module.exports = userCreate;
