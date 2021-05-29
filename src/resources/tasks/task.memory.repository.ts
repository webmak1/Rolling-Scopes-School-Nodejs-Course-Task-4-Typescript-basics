// @ts-check

import { DBTasks } from 'common/InMemoryDbTasks';
import { Task } from 'resources/tasks/task.model';

/**
 * A Tasks
 * @typedef {Object} Task
 * @property {string} id - Id
 * @property {string} title - Title
 * @property {string} order - Order
 * @property {string} description - Description
 * @property {string} userId - User Id
 * @property {string} boardId - Board Id
 * @property {string} columnId - Column Id
 */

/**
 * ### Get All Tasks in Repository
 * @returns {Promise<Task[]>} - Promise with All Tasks in Repository
 */
const getAll = async () => DBTasks.getAllTasks();

/**
 * ### Get Task in Repository
 * @param {string} boardId - board id
 * @param {string} taskId - task id
 * @returns {Promise<Task>} - Promise with a Single Task in Repository
 */
const get = async (boardId: string, taskId: string) => {
  const task = await DBTasks.getTask(boardId, taskId);
  if (!task) {
    throw new Error(`[App Error] The task with id: ${taskId} was not found!`);
  }
  return task;
};

/**
 * ### Create Task in Repository
 * @param {Task} task - Task body
 * @returns {Promise<Task>} - Promise with Created Task in Repository
 */
const create = (
  boardId: string,
  title: string,
  order: string,
  description: string,
  userId: string,
  columnId: string
) => {
  const newTask = new Task({
    id: '',
    boardId,
    title,
    order,
    description,
    userId,
    columnId,
  });

  DBTasks.createTask(newTask);
  return get(newTask.boardId, newTask.id);
};

/**
 * ### Update Task in Repository
 * @param {string} boardId - Board Id
 * @param {string} taskId - Task Id
 * @param {Task} newTask - new Task
 * @returns {Promise<Task>} - Promise with Updated Task in Repository
 */
const update = (
  boardId: string,
  taskId: string,
  title: string,
  order: string,
  description: string,
  userId: string,
  columnId: string
) => {
  const updateTask = new Task({
    id: taskId,
    boardId,
    title,
    order,
    description,
    userId,
    columnId,
  });

  DBTasks.updateTask(boardId, taskId, updateTask);
  return get(updateTask.boardId, updateTask.id);
};

/**
 * ### Remove Task in Repository
 * @param {string} id - Task Id
 * @returns {Promise<Task>} - Promise with Deleted Task in Repository
 */
const remove = (id: string) => DBTasks.removeTask(id);

export const tasksRepo = {
  getAll,
  get,
  create,
  update,
  remove,
};
