const Jwt = require('../common/jwt');
const jwt = new Jwt();
const { ADMINISTRATOR } = require('../consts/profiles');
async function updateTaskToDoneById(authorization, taskIdsCollection, taskRepository) {
  if (!taskIdsCollection) {
    throw new Error('taskIdsCollection does not be falsy.');
  }

  const token = authorization;
  const tokenDecode = await jwt.verifyToken(token);

  if (tokenDecode.data.profile !== ADMINISTRATOR) {
    throw new Error('Only administrator users can execute this action.');
  }
  
  const updateDescription = await taskRepository.updateTaskToDoneById(taskIdsCollection);
  return updateDescription;
}

module.exports = updateTaskToDoneById;
