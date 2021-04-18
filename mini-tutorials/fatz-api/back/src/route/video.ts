import { Router } from "express";
import { resourceLimits } from "worker_threads";
import * as videoCtrl from "../controller/Video";

const router:Router = Router();

router.get("/list", videoCtrl.all;
router.post("/add", videoCtrl.add);

export default router;