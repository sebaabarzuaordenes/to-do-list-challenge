const Jwt = require('../common/jwt');
const jwt = new Jwt();
const { ADMINISTRATOR, USER } = require('../consts/profiles');

async function taskCreate(req, task, taskRepository) {
  
  if (!req.headers.authorization) {
    throw new Error('unauthorized, headers.authorization not exist');
  }

  const paylaod = await jwt.verifyToken(req.headers.authorization);
  
  // if (paylaod.data.profile paylaod.data.profile !== USER) {
  //   throw new Error('Accion no peritida.');
  // }

  if (!task) {
    throw new Error('Task does not be falsy.');
  }

  if (!task.description) {
    throw new Error('The field description is required.');
  }

  task.status = 'pending';
  return await taskRepository.create(task);
}

module.exports = taskCreate;
