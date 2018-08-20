const { value } = require('unit.js');
const useCaseUpdateTaskDescriptionBulk = require('../updateTaskDescriptionBulk');

const taskRepository = {
  updateTaskDescriptionBulk: async () => true,
}

describe('Test unitarios Update Tasks Descriptions Bulk" ', async () => {
  
  it('Debe retornar "taskCollection can not be falsy." si la task es undefined', async () => {
    let taskCollection = null;
    let result;
    try {
      await useCaseUpdateTaskDescriptionBulk(taskCollection, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('taskCollection can not be falsy.');
  });
  
  it('Debe retornar "Empty taskCollection, must contain at least one item." si taskCollection a modificar viene vacia', async () => {
    let taskCollection = [];
    let result;
    try {
      await useCaseUpdateTaskDescriptionBulk(taskCollection, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('Empty taskCollection, must contain at least one item.');
  });

  it('Debe retornar "true" si el estatus de la tarea se actualizo con éxito', async () => {
    let taskCollection = {
      id: 1,
      description: "modificado"
    };

    const result = await useCaseUpdateTaskDescriptionBulk(taskCollection, taskRepository);
    value(result).isTrue();
  });

});
