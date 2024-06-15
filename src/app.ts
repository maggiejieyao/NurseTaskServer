import express, { Application } from "express";
import taskRouter from "./router/task-router";

const app: Application = express();

app.use(express.json());

app.use("/task", taskRouter);

app.listen(8000);
