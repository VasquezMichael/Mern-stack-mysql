import { Router } from "express";
import {
  getTask,
  getTasks,
  updateTask,
  deleteTask,
  createTask,
} from "../controllers/task.controllers.js";

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
