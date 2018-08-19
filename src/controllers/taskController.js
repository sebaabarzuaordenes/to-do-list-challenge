const useCaseTaskCreate = require('../use_case/taskCreate');
const useCaseUpdateTaskDescriptionById = require('../use_case/updateTaskDescriptionById');
const taskRepository = require('../repositories/taskRepository');

async function taskCreate (task){
  try {
    return await useCaseTaskCreate(task, taskRepository);
  } catch (e) {
    throw e;
  }
};

async function updateDescriptionById (task){
  try {
    return await useCaseUpdateTaskDescriptionById(task, taskRepository);
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
  taskCreate: taskCreate,
  getAllTasks: getAllTasks,
  updateDescriptionById: updateDescriptionById
  
};

