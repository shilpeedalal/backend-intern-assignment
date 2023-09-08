import Task from '../model/taskModule.js';
import { connect } from '../config/database.js';
import { errorHandler } from '../utils/errorHandler.js';
import { isValidTask } from '../utils/helper.js';

export const getAllTask = async (req, res, next) => {
  try {

    console.log('getAllTask');
    await connect();
    const tasks = await Task.getTasks();
    return res.status(201).json(tasks);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  try {
    await connect();
    const { title, description, status } = req.body;
    console.log('createTask', title, description, status);
    // Validate input data
    if (!isValidTask({ title, description, status })) {
      throw new errorHandler (400, 'Invalid task data');
    }

    const task = await Task.createTask({ title, description, status });
    return res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const updateTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!id || !status) {
      throw new errorHandler (400, 'Invalid input data');
    }

    const updatedTask = await Task.updateById(id, { status });

    if (!updatedTask) {
      throw new errorHandler (404, 'Task not found');
    }

    return res.status(201).json(updatedTask);
  } catch (error) {
    next(error);  }
};
