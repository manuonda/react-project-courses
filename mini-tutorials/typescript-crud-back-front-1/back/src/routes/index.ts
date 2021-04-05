import { Router, Request, Response } from "express";
import { all, addTodo, update, remove} from "../controllers/Todo";

const router = Router();

router.get("/list", all);
router.post("/add", addTodo);
router.put("/:id", update);
router.delete("/:id" , remove);

module.exports = router;