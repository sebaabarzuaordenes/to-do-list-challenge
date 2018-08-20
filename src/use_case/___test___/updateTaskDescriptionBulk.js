const { value } = require('unit.js');
const useCaseUpdateTaskDescriptionBulk = require('../updateTaskDescriptionBulk');

const taskRepository = {
  updateTaskDescriptionBulk: async () => true,
}

describe('Test unitarios Update Tasks Descriptions Bulk" ', async () => {
  
  it('Debe retornar "taskIdsCollection can not be falsy." si la task es undefined', async () => {
    let taskIdsCollection = null;
    let result;
    try {
      await useCaseUpdateTaskDescriptionBulk(taskIdsCollection, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('taskIdsCollection can not be falsy.');
  });
  
  it('Debe retornar "Empty taskIdsCollection, must contain at least one item." si taskIdsCollection a modificar viene vacia', async () => {
    let taskIdsCollection = [];
    let result;
    try {
      await useCaseUpdateTaskDescriptionBulk(taskIdsCollection, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('Empty taskIdsCollection, must contain at least one item.');
  });

  it('Debe retornar "true" si el estatus de la tarea se actualizo con éxito', async () => {
    let taskIdsCollection = {
      id: 1,
      status: "done"
    };

    const result = await useCaseUpdateTaskDescriptionBulk(taskIdsCollection, taskRepository);
    value(result).isTrue();
  });

});
