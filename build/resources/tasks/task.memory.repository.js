"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksRepo = void 0;
const InMemoryDbTasks_1 = require("common/InMemoryDbTasks");
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
const getAll = async () => InMemoryDbTasks_1.DBTasks.getAllTasks();
/**
 * ### Get Task in Repository
 * @param {string} boardId - board id
 * @param {string} taskId - task id
 * @returns {Promise<Task>} - Promise with a Single Task in Repository
 */
const get = async (boardId, taskId) => {
    const task = await InMemoryDbTasks_1.DBTasks.getTask(boardId, taskId);
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
const create = (task) => InMemoryDbTasks_1.DBTasks.createTask(task);
/**
 * ### Update Task in Repository
 * @param {string} boardId - Board Id
 * @param {string} taskId - Task Id
 * @param {Task} newTask - new Task
 * @returns {Promise<Task>} - Promise with Updated Task in Repository
 */
const update = (boardId, taskId, newTask) => InMemoryDbTasks_1.DBTasks.updateTask(boardId, taskId, newTask);
/**
 * ### Remove Task in Repository
 * @param {string} id - Task Id
 * @returns {Promise<Task>} - Promise with Deleted Task in Repository
 */
const remove = (id) => InMemoryDbTasks_1.DBTasks.removeTask(id);
module.exports = { getAll, get, create, update, remove };
exports.tasksRepo = {
    getAll,
    get,
    create,
    update,
    remove,
};
