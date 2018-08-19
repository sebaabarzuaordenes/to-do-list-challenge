// const { ADMINISTRATOR, USER } = require('../consts/profiles');

async function taskCreate(task, taskRepository) {
  if (!task) {
    throw new Error('Task does not be falsy.');
  }

  if (!task.description) {
    throw new Error('The field description is required.');
  }

  task.status = 'PENDING';
  return await taskRepository.create(task);
}

module.exports = taskCreate;
