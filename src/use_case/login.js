const Jwt = require('../common/jwt');
const jwt = new Jwt();
const md5 = require('md5');
async function login(user, userRepository) {
  if (!user) {
    throw new Error('User does not be falsy.');
  }

  if (!user.userName || !user.password) {
    throw new Error('All fields are required.');
  }

  user.password = md5(user.password);
  let userFound = await userRepository.findOne(user);

  if(!userFound) {
    throw new Error('User not found.');
  }

  const payload = {
    profile: userFound.profile,
    userName: user.userName,
  };

  const token = await jwt.createToken(payload);
  return {
      token: token
  }
}

module.exports = login;
