const { value } = require('unit.js');
const login = require('../login');
const models = require('../../repositories/db/models');

const userRepository = {
  create: async () => true,
  findOne: async () => true,
};

describe('Test unitarios login', () => {
  it('Debe retornar "true" si encontró un usuario en base de datos', async () => {
    let user = {
      userName: "userName1",
      password: "7bb483729b5a8e26f73e1831cde5b842",
    };
    const result = await login(user, userRepository);
    value(result).isTrue();
  });

  it('Debe retornar "All fields are required." si no se ingreso clave y/o contraseña', async () => {
    const user = {
      userName: "userName1",
      password: "",
    };
    let result;
    try {
      await login(user, userRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('All fields are required.');
  });

});
