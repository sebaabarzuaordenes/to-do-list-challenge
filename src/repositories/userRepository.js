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
  })
  .then(user => {
    return user;
  })
  .catch(e => {
    return e;
  });
};

function findAll() {
  return models.User.findAll()
  .then(User => {
    return User;
  })
  .catch(e => {
    return e;
  });
};


module.exports = {
  create: create,
  findOne: findOne,
  findAll: findAll
};
