export const isValidTask = (task) => {
  return task && task.title && task.description && task.status;
};
