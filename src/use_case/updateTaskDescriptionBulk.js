async function updateTaskDescriptionBulk(taskIdsCollection, taskRepository) {
  if (!taskIdsCollection) {
    throw new Error('taskIdsCollection can not be falsy.');
  }
  
  if (taskIdsCollection.length == 0 ) {
    throw new Error('Empty taskIdsCollection, must contain at least one item.');
  }

  return await taskRepository.updateTaskDescriptionBulk(taskIdsCollection);
}

module.exports = updateTaskDescriptionBulk;
