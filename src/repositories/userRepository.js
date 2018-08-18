const models = require('./db/models');
function create(user) {
  return models.User.create(user);
};

module.exports = {
  create
};
