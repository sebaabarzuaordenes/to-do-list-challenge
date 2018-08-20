const { value } = require('unit.js');
const createTask = require('../createTask');
// const { ADMINISTRATOR } = require('../../consts/profiles');

const taskRepository = {
  create: async () => true,
};

describe('Test unitarios task create"', () => {
  it('Debe retornar "Task does not be falsy." si la task es undefined', async () => {
    let task = null;
    let result;
    try {
      await createTask(task, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('Task does not be falsy.');
  });

  it('Debe retornar "The field description is required." si no hay description', async () => {
    let task = {
      description: '',
    };
    let result;
    try {
      await createTask(task, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('The field description is required.');
  });

  it('Debe retornar true si el entrego un task válido', async () => {
    let task = {
      description: 'primera tarea',
    };
    let result = await createTask(task, taskRepository);
    value(result).isTrue();
  });
});
