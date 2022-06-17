export interface ITask{
    date: string, 
    spaceName: string, 
    folderName: string, 
    listName: string,
    assignee: string, 
    taskId: string | number,
    taskName: string, 
    taskStatus: string, 
    loggedHours: string,
    billable: boolean
}

