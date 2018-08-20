const taskRepository = require('../repositories/taskRepository');
const useCasecreateTask = require('../use_case/createTask');
const useCaseUpdateTaskDescriptionById = require('../use_case/updateTaskDescriptionById');
const useCaseUpdateTaskToDoneById = require('../use_case/updateTaskToDoneById');
const useCaseBulkCreateTask = require('../use_case/bulkCreateTask');
const useCaseUpdateTaskToDoneBulk = require('../use_case/updateTaskToDoneBulk');
const useCaseUpdateTaskDescriptionBulk = require('../use_case/updateTaskDescriptionBulk');





async function createTask (task){
  try {
    return await useCasecreateTask(task, taskRepository);
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

async function updateDescriptionById (task){
  try {
    return await useCaseUpdateTaskDescriptionById(task, taskRepository);
  } catch (e) {
    throw e;
  }
};

async function updateTaskToDoneById (authorization, task){
  try {
    return await useCaseUpdateTaskToDoneById(authorization, task, taskRepository);
  } catch (e) {
    throw e;
  }
};

async function bulkCreateTask (taskList){
  try {
    return await useCaseBulkCreateTask(taskList, taskRepository);
  } catch (e) {
    throw e;
  }
};

async function updateTaskToDoneBulk (taskList){
  try {
    return await useCaseUpdateTaskToDoneBulk(taskList, taskRepository);
  } catch (e) {
    throw e;
  }
};


async function updateTaskDescriptionBulk (taskList){
  try {
    return await useCaseUpdateTaskDescriptionBulk(taskList, taskRepository);
  } catch (e) {
    throw e;
  }
};




module.exports = {
  createTask: createTask,
  getAllTasks: getAllTasks,
  updateDescriptionById: updateDescriptionById,
  updateTaskToDoneById: updateTaskToDoneById,
  bulkCreateTask: bulkCreateTask,
  updateTaskToDoneBulk: updateTaskToDoneBulk,
  updateTaskDescriptionBulk: updateTaskDescriptionBulk
  
};

