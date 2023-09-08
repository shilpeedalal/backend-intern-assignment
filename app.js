import express from "express";
import cors from 'cors'
import * as taskController from "./src/controllers/taskController.js";

const app = express();
app.use(cors())

app.use(express.json({ limit: "50mb" }));

app.get("/tasks", taskController.getAllTask);

app.post("/task", taskController.createTask);

app.put("/task/:id", taskController.updateTaskById);

app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

export default app;