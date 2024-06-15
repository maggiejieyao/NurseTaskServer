import { Router } from "express";
import * as taskController from "../controller/task-controller";

const router = Router();

router.get("/tasks", taskController.getAllTasks);
router.post("/task", taskController.addTask);
router.patch("/:taskId", taskController.addTask);
router.delete("/:taskId", taskController.deleteTask);

export default router;
