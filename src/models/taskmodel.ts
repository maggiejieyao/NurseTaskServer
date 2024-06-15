interface TaskModel {
  id: string;
  userId: string;
  clientName: string;
  assignedTo: string;
  street: string;
  city: string;
  taskTitle: string;
  notes: string;
  type: boolean; // type true means personal
  status: boolean; //status true means task completed
  reminderEnabled: boolean;
  startTime: Date;
  endTime: Date;
}

export default TaskModel;
