const models = require('./db/models');

function create(task) {
  return models.Task.create(task);
};

function findAll() {
  return models.Task.findAll();
  // .then(Tasks => {
  //   console.log(Tasks);
  //     res.send({ error: false, message: 'Tasks list', data: Tasks });
  // })
  // .catch(e => {
  //   console.log('Oops! something went wrong, : ', e);
  //   throw e;
  // });
};

module.exports = {
  create: create,
  findAll: findAll

};
