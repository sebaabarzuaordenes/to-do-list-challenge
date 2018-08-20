const { value } = require('unit.js');
const updateTaskToDoneBulk = require('../updateTaskToDoneBulk');
const Jwt = require('../../common/jwt');
const jwt = new Jwt();

const taskRepository = {
  updateTaskToDoneBulk: async () => true,
};

describe('Test unitarios "update Task To Done Bulk"', () => {

  it('Debe retornar "taskIdsCollection does not be falsy." si taskIdsCollection es undefined', async () => {
    let taskIdsCollection = null;
    let result;
    try {
      await updateTaskToDoneBulk(null, taskIdsCollection, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('taskIdsCollection does not be falsy.');
  });

  it('Debe retornar "Empty taskIdsCollection, must contain at least one item." si taskIdsCollection a modificar viene vacia', async () => {
    let taskIdsCollection = [];
    let result;
    try {
      await updateTaskToDoneBulk(null, taskIdsCollection, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('Empty taskIdsCollection, must contain at least one item.');
  });
  
  it('Debe retornar true si se realizó el caso de uso "update Task To Done Bulk" con exito ', async () => {
    let taskIdsCollection = [1,2,3];
    let payload = {
      profile: 1,
      userName: "userName1",
    };
    
    let authorization = await jwt.createToken(payload);
    const result = await updateTaskToDoneBulk(authorization, taskIdsCollection, taskRepository);
    value(result).isTrue();
  });
});
