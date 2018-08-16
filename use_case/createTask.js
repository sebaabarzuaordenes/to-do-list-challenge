const { ADMINISTRATOR, USER } = require('../consts/profiles');

async function taskCreate (user, task, taskRepository) {
    console.log('task::', task);
    // console.log('user profile ::', typeof user.profile, user.profile);
    // console.log('ADMINISTRATOR::', typeof ADMINISTRATOR, ADMINISTRATOR);
    // console.log('USER::', typeof USER, USER);
    // console.log('taskRepository', taskRepository.create);

    if (user.profile !== ADMINISTRATOR && user.profile !== USER) {
        throw new Error('Accion no peritida.');
    }

    if (!task) {
        throw new Error('Task does not be falsy.');
    }

    if (!task.description) {
        throw new Error('The field description is required.');
    }

    let countTaskByUser = await taskRepository.getCountTaskByUser(user.id);
    task.number = countTaskByUser++;
    task.status = 'pending';

    return await taskRepository.create(task);
}

module.exports = taskCreate;
