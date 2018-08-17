const models = require('./db/models');
function create(task) {
  return models.Task.create(task);
};

module.exports = {
  create
};
