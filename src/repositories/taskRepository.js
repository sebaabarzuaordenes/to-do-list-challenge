const models = require('./db/models');
const { PENDING } = require('../consts/taskStatus');
// var _ = require('lodash');

function create(task) {
  return models.Task.create(task)
    .then(task => {
      return task;
    })
    .catch(e => {
      throw e;
    });
};

function findAll() {
  return models.Task.findAll()
    .then(tasks => {
      return tasks;
    })
    .catch(e => {
      throw e;
    });
};

function updateTaskDescriptionById(task) {
  return models.Task.update(
    { description: task.description },
    { where: { id: task.id } }
  )
    .then(task => {
      return true
    })
    .catch(e => {
      throw e;
    });
};

function updateTaskToDoneById(task) {
  return models.Task.update(
    {
      status: 'DONE',
      number: 1
    },
    { where: { id: task.id } }
  )
    .then(() => {
      return true
    })
    .catch(e => {
      throw e;
    });
};

function bulkCreateTask(taskslist) {
  return models.Task.bulkCreate(taskslist, {returning:true})
    .then(response => {
      return response; 
      // return true
    })
    .catch(e => {
      throw e;
    });
}

function updateTaskToDonedBulk(taskslist) {
  return models.Task.update(
    { 
      number: 1,
      status: "DONE"
    },
    { where: { 'id': {in: taskslist}, status: PENDING } }

  )
    .then(response => {
      return response;
    })
    .catch(e => {
      throw e;
    });
}


module.exports = {
  create: create,
  findAll: findAll,
  updateTaskDescriptionById: updateTaskDescriptionById,
  updateTaskToDoneById: updateTaskToDoneById,
  bulkCreateTask: bulkCreateTask,
  updateTaskToDonedBulk: updateTaskToDonedBulk
};
