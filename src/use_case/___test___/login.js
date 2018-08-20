const { value } = require('unit.js');
const login = require('../login');

const userRepository = {
  create: async () => true,
  findOne: async () => true,
};

describe('Test unitarios "login" ', () => {
  
  it('Debe retornar "User does not be falsy." si user es undefined', async () => {
    let user = null;
    let result;
    try {
      await login(user, userRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('User does not be falsy.');
  });
  
  it('Debe retornar "All fields are required." si no se ingreso clave y/o contraseña', async () => {
    let user = {
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
  
  it('Debe retornar propiedad token si el login fué exitoso', async () => {
    let user = {
      userName: "userName1",
      password: "7bb483729b5a8e26f73e1831cde5b842",
    };
    const result = await login(user, userRepository);
    value(result).hasProperty('token');
  });

});
