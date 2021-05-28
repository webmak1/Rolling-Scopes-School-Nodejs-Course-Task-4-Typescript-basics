"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksService = void 0;
const task_memory_repository_1 = require("tasks/task.memory.repository");
const task_modle_1 = require("tasks/task.modle");
/**
 * ### Get All Tasks in Service
 * @returns {Promise<Task[]>} - Promise with All Tasks in Service
 */
const getAll = async () => {
    const tasks = await task_memory_repository_1.tasksRepo.getAll();
    return tasks.map(task_modle_1.Task.toResponse);
};
/**
 * ### Get Task by Id in Service
 * @param {express.Request} req
 * @returns {Promise<Task>} - Promise with a Single Task in Service
 */
const get = async (req) => {
    const { boardId, id: taskId } = req.params;
    const task = await task_memory_repository_1.tasksRepo.get(boardId, taskId);
    return task_modle_1.Task.toResponse(task);
};
/**
 * ### Create Task in Service
 * @param {express.Request} req
 * @returns {Promise<Task>} - Promise with Created Task in Service
 */
const create = async (req) => {
    const { title, order, description, userId, columnId } = req.body;
    const { boardId } = req.params;
    const task = await task_memory_repository_1.tasksRepo.create(new task_modle_1.Task({
        title,
        order,
        description,
        userId,
        boardId,
        columnId,
    }));
    return task_modle_1.Task.toResponse(task);
};
/**
 * ### Update Task in Service
 * @param {express.Request} req
 * @returns {Promise<Task>} - Promise with Updated Task in Service
 */
const update = async (req) => {
    const { body } = req;
    const { boardId, id: taskId } = req.params;
    const updatedTask = await task_memory_repository_1.tasksRepo.update(boardId, taskId, body);
    return task_modle_1.Task.toResponse(updatedTask);
};
/**
 * ### Remove Task in Service
 * @param {express.Request} req
 * @returns {Promise<Task>} - Promise with Deleted Task
 */
const remove = async (req) => {
    const task = await task_memory_repository_1.tasksRepo.remove(req.params.id);
    return task_modle_1.Task.toResponse(task);
};
exports.tasksService = {
    getAll,
    get,
    create,
    update,
    remove,
};
