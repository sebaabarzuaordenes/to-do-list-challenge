const createUserUseCase = require('../use_case/userCreate');
const userRepository = require('../repositories/userRepository');
async function userCreate (user){
  console.log('user from controller', user);
  try {
    return await createUserUseCase(user, userRepository);
  } catch (e) {
    throw e;
  }
};
module.exports = {
  userCreate: userCreate
};

