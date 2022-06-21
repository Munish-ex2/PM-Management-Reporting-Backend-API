// import { ITask } from "../interfaces/task.interface";

// export default class TaskModel implements ITask{
//     date: string;
//     spaceName: string;
//     folderName: string;
//     listName: string;
//     assignee: string;
//     taskId: string | number;
//     taskName: string;
//     taskStatus: string;
//     loggedHours: string;
//     billable: boolean;
// }

import { IAssignee, IAttachment, ICreator, ICustomField, IFolder, IList, IProject, IRootObject, ISpace, IStatus, IWatcher } from "../interfaces/task.interface";

class TaskModel implements IRootObject{
    id: string;
    custom_id?: any;
    name: string;
    text_content: string;
    description: string;
    status: IStatus;
    orderindex: string;
    date_created: string;
    date_updated: string;
    date_closed?: any;
    archived: boolean;
    creator: ICreator;
    assignees: IAssignee[];
    watchers: IWatcher[];
    checklists: any[];
    tags: any[];
    parent?: any;
    priority?: any;
    due_date: string;
    start_date?: any;
    points?: any;
    time_estimate?: any;
    time_spent: number;
    custom_fields: ICustomField[];
    dependencies: any[];
    linked_tasks: any[];
    team_id: string;
    url: string;
    permission_level: string;
    list: IList;
    project: IProject;
    folder: IFolder;
    space: ISpace;
    attachments: IAttachment[];
}

export default TaskModel;