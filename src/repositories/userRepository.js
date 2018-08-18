const models = require('./db/models');
function create(user) {
  return models.User.create(user);
};


function findOne(user) {
  return models.User.findOne({
    where: {
        userName: user.userName,
        password: user.password
    }
  });
};

module.exports = {
  create: create,
  findOne: findOne
};
