const { value } = require('unit.js');
const taskCreate = require('../createTask');
const { ADMINISTRATOR } = require('../../consts/profiles');

const taskRepository = {
  create: async () => true,
};

describe('Test unitarios task create', () => {
  it('Debe retornar true si el entrego un task válido', async () => {
    const task = {
      description: 'primera tarea',
    };
    const user = {
      profile: ADMINISTRATOR,
    };
    const result = await taskCreate(user, task, taskRepository);
    value(result).isTrue();
  });

  it('Debe retornar "The field description is required." si no hay description', async () => {
    const task = {
      description: '',
    };
    const user = {
      profile: 1,
    };
    let result;
    try {
      await taskCreate(user, task, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('The field description is required.');
  });

  it('Debe retornar "Task does not be falsy." si task es undefined', async () => {
    const task = null;
    const user = {
      profile: 1,
    };

    let result;
    try {
      await taskCreate(user, task, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('Task does not be falsy.');
  });
});
