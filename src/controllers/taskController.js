const createTaskUseCase = require('../use_case/createTask');
const taskRepository = require('../repositories/taskRepository');
async function createTask (req, task){
  try {
    return await createTaskUseCase(req, task, taskRepository);
  } catch (e) {
    throw e;
  }
};

async function getAllTasks (){
  try {
    return await taskRepository.findAll();
  } catch (e) {
    throw e;
  }
};

module.exports = {
  createTask: createTask,
  getAllTasks: getAllTasks
  
};

