const Jwt = require('../common/jwt');
const jwt = new Jwt();
const { ADMINISTRATOR } = require('../consts/profiles');

async function taskCreate(authorization, taskIdsCollection, taskRepository) {
  
  if (!taskIdsCollection) {
    throw new Error('taskIdsCollection does not be falsy.');
  }
  
  if (taskIdsCollection.length == 0 ) {
    throw new Error('Empty taskIdsCollection, must contain at least one item.');
  }

  const token = authorization;
  const tokenDecode = await jwt.verifyToken(token);

  if (tokenDecode.data.profile !== ADMINISTRATOR) {
    throw new Error('Only administrator users can execute this action.');
  }

  return await taskRepository.updateTaskToDoneBulk(taskIdsCollection);
}

module.exports = taskCreate;
