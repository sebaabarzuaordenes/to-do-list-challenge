const { value } = require('unit.js');
const taskCreate = require('../createTask');
const { ADMINISTRATOR, USER } = require('../../consts/profiles');
const { PENDING, DONE } = require('../../consts/taskStatus');

const taskRepository = {
  create: async () => true,
  getCountTaskByUser: async () => 1,
};

describe('Test unitarios TO-DO LIST', () => {
  it('debe retornar true si el entrego un task válido', async () => {
    const task = {
      description: 'primera tarea',
    };
    const user = {
      profile: 1,
    };
    const result = await taskCreate(user, task, taskRepository);
    value(result).isTrue();
  });

  it('debe retornar "The field description is required." si no hay description', async () => {
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

  it('debe retornar "Task does not be falsy." si task es undefined', async () => {
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
