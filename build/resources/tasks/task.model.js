"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const uuid_1 = require("uuid");
/**
 *  ### Class to create a Task object
 */
class Task {
    id;
    title;
    order;
    description;
    userId;
    boardId;
    columnId;
    /**
     *
     * @param {Object} Task - Task
     */
    constructor({ title, order, description, userId, boardId, columnId }) {
        /**
         * @property {uuid()} id - id
         */
        this.id = uuid_1.v4();
        /**
         * @property {string} title - title
         */
        this.title = title;
        /**
         * @property {string} order - order
         */
        this.order = order;
        /**
         * @property {string} description - description
         */
        this.description = description;
        /**
         * @property {string} userId - userId
         */
        this.userId = userId;
        /**
         * @property {string} boardId - boardId
         */
        this.boardId = boardId;
        /**
         * @property {string} columnId - columnId
         */
        this.columnId = columnId;
    }
    /**
     * ### Return Task public data
     * @param {Task} task - Task
     * @returns {Task}
     */
    static toResponse(task) {
        const { id, title, order, description, userId, boardId, columnId } = task;
        return {
            id,
            title,
            order,
            description,
            userId,
            boardId,
            columnId,
        };
    }
}
exports.Task = Task;
module.exports = Task;
