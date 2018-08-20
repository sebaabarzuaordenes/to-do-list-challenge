const { value } = require('unit.js');
const createUser = require('../createUser');

const userRepository = {
  create: async () => true,
};

describe('Test unitarios "Create user" ', () => {

  it('Debe retornar "User does not be falsy." si user es undefined', async () => {
    let user = null;
    let result;
    try {
      await createUser(user, userRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('User does not be falsy.');
  });

  it('Debe retornar "All fields are required." si no completo todos los registros para crear un usuario', async () => {
    let user = {
      name: "asdasd",
      userName: "",
      password: "",
      profile: ""
    };
    let result;
    try {
      await createUser(user, userRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('All fields are required.');
  });

  it('Debe retornar true si el usuario se creo con exito', async () => {
    let user = {
      name: "asdasd",
      userName: "asdasd",
      password: "asdasd",
      profile: "asdasd"
    };
    // let result = await createUser(user, userRepository);
    const result = await createUser(user, userRepository);
    value(result).isTrue();
  });
});
