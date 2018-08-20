const createUserUseCase = require('../use_case/createUser');
const loginUseCase = require('../use_case/login');
const userRepository = require('../repositories/userRepository');

async function createUser (user){
  try {
    return await createUserUseCase(user, userRepository);
  } catch (e) {
    throw e;
  }
};

async function authentication (user){
  try {
    return await loginUseCase(user, userRepository);
  } catch (e) {
    throw e;
  }
};

async function getAllUsers (){
  try {
    return await userRepository.findAll();
  } catch (e) {
    throw e;
  }
};

module.exports = {
  createUser: createUser,
  getAllUsers: getAllUsers,
  authentication: authentication
};

