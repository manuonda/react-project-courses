import { Router } from "express";
import { resourceLimits } from "worker_threads";
import * as videoCtrl from "../controller/Video";

const router:Router = Router();

router.get("/", videoCtrl.all);
router.post("/", videoCtrl.add);
router.delete("/:id", videoCtrl.remove);
router.put("/:id", videoCtrl.update);
router.get("/:id", videoCtrl.get);

export default router;