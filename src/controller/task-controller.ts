import { Request, Response } from "express";
import TaskModel from "../models/taskmodel";
import { v4 as uuid } from "uuid";

let tasks: TaskModel[] = [
  {
    id: uuid(),
    userId: "",
    clientName: "",
    assignedTo: "",
    street: "",
    city: "",
    taskTitle: "",
    notes: "",
    type: false,
    status: false,
    reminderEnabled: true,
    startTime: new Date(),
    endTime: new Date(),
  },
];

export const getAllTasks = (req: Request, res: Response) => {
  res.status(200).json({ message: "connected to server", tasks: tasks });
};

export const addTask = (req: Request, res: Response) => {
  const {
    userId,
    clientName,
    assignedTo,
    street,
    city,
    taskTitle,
    notes,
    type,
  } = req.body;

  const newTask: TaskModel = {
    id: uuid(),
    userId,
    clientName,
    assignedTo,
    street,
    city,
    taskTitle,
    notes,
    type,
    status: false,
    reminderEnabled: true,
    startTime: new Date(),
    endTime: new Date(),
  };

  tasks.push(newTask);

  res.status(200).json({ message: "successfully loaded", tasks: tasks });
};

export const editTask = (req: Request, res: Response) => {
  const { taskId } = req.params;
  const {
    userId,
    clientName,
    assignedTo,
    street,
    city,
    taskTitle,
    notes,
    type,
    status,
    reminderEnabled,
  } = req.body;

  const index = tasks.findIndex((element) => element.id === taskId);
  tasks[index].userId = userId;
  tasks[index].clientName = clientName;
  tasks[index].assignedTo = assignedTo;
  (tasks[index].street = street),
    (tasks[index].city = city),
    (tasks[index].taskTitle = taskTitle),
    (tasks[index].notes = notes),
    (tasks[index].type = type),
    (tasks[index].status = status),
    (tasks[index].reminderEnabled = reminderEnabled);

  res.status(200).json({ message: "sucessfully updated", tasks: tasks });
};

export const deleteTask = (req: Request, res: Response) => {
  const { taskId } = req.params;
  tasks = tasks.filter((element) => element.id !== taskId);
  res.status(200).json({ message: "sucessfully deleted", tasks: tasks });
};
