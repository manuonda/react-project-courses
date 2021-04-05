"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Todo_1 = require("../controllers/Todo");
const router = express_1.Router();
router.get("/list", Todo_1.all);
router.post("/add", Todo_1.addTodo);
router.put("/:id", Todo_1.update);
router.delete("/:id", Todo_1.remove);
module.exports = router;
//# sourceMappingURL=index.js.map