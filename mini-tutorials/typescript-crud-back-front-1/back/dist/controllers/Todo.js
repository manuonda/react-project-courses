"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.addTodo = exports.all = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const all = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find({});
        res.status(200).json({ todos });
    }
    catch (error) {
        res.status(500);
    }
});
exports.all = all;
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req.body", req.body);
    try {
        const { name, description, status } = req.body;
        const todo = new todo_1.default({
            name: name,
            description: description,
            status: status,
        });
        const result = yield todo.save();
        res.status(200).json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500);
    }
});
exports.addTodo = addTodo;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
exports.remove = remove;
//# sourceMappingURL=Todo.js.map