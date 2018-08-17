const createTaskUseCase = require('../use_case/createTask');
const taskRepository = require('../repositories/taskRepository');
async function createTask (user, task){
  try {
    return await createTaskUseCase(user, task, taskRepository);
  } catch (e) {
    throw e;
  }
};
module.exports = {
  createTask: createTask
};

