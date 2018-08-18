const Jwt = require('../common/jwt');
const jwt = new Jwt();
async function login(user, userRepository) {
  if (!user) {
    throw new Error('The user entered does not be falsy.');
  }

  if (!user.userName || !user.password) {
    throw new Error('All fields are required.');
  }
  let userFound = await userRepository.findOne(user);

  if(!user) {
    throw new Error('User not found.');
  }

  const payload = {
    userName: user.userName,
    profile: user.profile
  };

  const token = await jwt.createToken(payload);
  console.log('token', token);
  const responde = {
    data: {
      'token': token,
      'expiresIn': jwt.config().expiresIn
    }
  };
  return responde
}

module.exports = login;
