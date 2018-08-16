const { ADMINISTRATOR } = require('../consts/profiles');
const { PENDING, DONE } = require('../consts/taskStatus');

async function updateTaskToPending (user, taskId, taskRepository) {

    if (user.profile !== ADMINISTRATOR) { 
        throw new Error('accion no peritida');
    }

    if (!taskId) {
        throw new Error('item does not be falsy');
    }

    const tasks = await taskRepository.getAllTaskByUserIds(user.id);

    const doneTasks = tasks.filter(task => task.status === DONE && task.id !== taskId);
    const pendingTasks = tasks.filter(task => task.status === PENDING && task.id !== taskId);
    pendingTasks.push({ id: taskId });

    const indiceAutonumerico = 0;

    for (const doneTask of doneTasks) {
        await taskRepository.updateStatusAndNumberTask(doneTask.id, DONE,indiceAutonumerico++);
    }

    for (const pendingTask of pendingTasks) {
        await taskRepository.updateStatusAndNumberTask(pendingTask.id, PENDING, indiceAutonumerico++);
    }

}

module.exports = updateTaskToPending;