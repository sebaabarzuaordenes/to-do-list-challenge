const Jwt = require('../common/jwt');
const jwt = new Jwt();
const md5 = require('md5');
async function login(user, userRepository) {
  if (!user) {
    throw new Error('The user entered does not be falsy.');
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
    profile: user.profile,
    userName: user.userName,
  };

  const token = await jwt.createToken(payload);
  const responde = {
    data: {
      'token': token,
      'expiresIn': jwt.config().expiresIn
    }
  };
  return responde
}

module.exports = login;
