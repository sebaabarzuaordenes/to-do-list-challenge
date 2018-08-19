const models = require('./db/models');

function create(task) {
  return models.Task.create(task)
  .then(task => {
    return task;
  })
  .catch(e => {
    return e;
  });
};

function findAll() {
  return models.Task.findAll()
  .then(tasks => {
    return tasks;
  })
  .catch(e => {
    return e;
  });
};

function updateTaskDescriptionById(task) {
  return models.Task.update(
    {description: task.description},
    { where: { id: task.id } }
  )
  .then(() => {
    return true
  })
  .catch(e => {
    return e;
  });
 };

 function updateTaskToDoneById(task) {
  return models.Task.update(
    {status: 'done'},
    { where: { id: task.id } }
  )
  .then(() => {
    return true
  })
  .catch(e => {
    return e;
  });
 };
 

module.exports = {
  create: create,
  findAll: findAll,
  updateTaskDescriptionById: updateTaskDescriptionById,
  updateTaskToDoneById: updateTaskToDoneById
};
