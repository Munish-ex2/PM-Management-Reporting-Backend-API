import { ITask } from "../interfaces/task.interface";

export default class TaskModel implements ITask{
    date: string;
    spaceName: string;
    folderName: string;
    listName: string;
    assignee: string;
    taskId: string | number;
    taskName: string;
    taskStatus: string;
    loggedHours: string;
    billable: boolean;
}