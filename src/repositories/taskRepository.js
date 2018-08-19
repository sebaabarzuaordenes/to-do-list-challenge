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
    // console.log('result:', result);
    return true
  })
  .catch(e => {
    return e;
  });
 };
 

module.exports = {
  create: create,
  findAll: findAll,
  updateTaskDescriptionById: updateTaskDescriptionById
};
