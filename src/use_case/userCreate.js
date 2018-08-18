const md5 = require('md5');
async function userCreate(user, userRepository) {
  if (!user) {
    throw new Error('User does not be falsy.');
  }
  console.log('user.psw', user.psw);
  user.psw = md5(user.psw);
  return await userRepository.create(user);
}

module.exports = userCreate;
