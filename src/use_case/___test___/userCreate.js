const { value } = require('unit.js');
const userCreate = require('../userCreate');
// var md5 = require('md5');

const userRepository = {
  create: async () => true,
};

describe('Test unitarios User Create', () => {
  it('Debe retornar true si el entrego un usuario válido', async () => {
    const user = {
      name: 'Test',
      user: 'test',
      password: 'psw',
      profile: 1,
    };
    const result = await userCreate(user, userRepository);
    value(result).isTrue();
  });

  it('Debe retornar "User does not be falsy." si User es undefined', async () => {
    const user = null;
    let result;
    try {
      await userCreate(user, userRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('User does not be falsy.');
  });
});
