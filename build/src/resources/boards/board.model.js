"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
/**
 *  ### Class to create a Board object
 */
class Board {
    id;
    title;
    columns;
    /**
     *
     * @param {Object} Board - Board
     */
    constructor({ title, columns }) {
        /**
         * @property {uuid()} id - id
         */
        this.id = uuid_1.v4();
        /**
         * @property {string} title - title
         */
        this.title = title;
        /**
         * @property {string} columns - columns
         */
        this.columns = columns;
    }
    /**
     * ### Return Board public data
     * @property {Function} toResponse - Returns Board public data
     * @param {Board} board - Board
     * @returns { Board} - Board
     */
    static toResponse(board) {
        const { id, title, columns } = board;
        return { id, title, columns };
    }
}
module.exports = Board;
