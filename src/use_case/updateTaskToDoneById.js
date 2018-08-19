const Jwt = require('../common/jwt');
const jwt = new Jwt();

async function updateTaskToDoneById(authorization, task, taskRepository) {

  if (!task) {
    throw new Error('Task does not be falsy.');
  }

  const token = authorization;
  const tokenDecode = await jwt.verifyToken(token);

  if (tokenDecode.data.profile !== 1) {
    throw new Error('Only administrator users can execute this action.');
  }
  
  const updateDescription = await taskRepository.updateTaskToDoneById(task);
  return updateDescription;
}

module.exports = updateTaskToDoneById;
