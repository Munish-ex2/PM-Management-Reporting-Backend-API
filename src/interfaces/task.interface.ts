// export interface ITask{
//     date: string, 
//     spaceName: string, 
//     folderName: string, 
//     listName: string,
//     assignee: string, 
//     taskId: string | number,
//     taskName: string, 
//     taskStatus: string, 
//     loggedHours: string,
//     billable: boolean
// }

export interface IStatus {
    id: string;
    status: string;
    color: string;
    orderindex: number;
    type: string;
}

export interface ICreator {
    id: number;
    username: string;
    color: string;
    email: string;
    profilePicture: string;
}

export interface IAssignee {
    id: number;
    username: string;
    color: string;
    initials: string;
    email: string;
    profilePicture?: any;
}

export interface IWatcher {
    id: number;
    username: string;
    color: string;
    initials: string;
    email: string;
    profilePicture: string;
}

export interface IOption {
    id: string;
    name: string;
    color: string;
    orderindex: number;
}

export interface ITypeConfig {
    default: number;
    placeholder?: any;
    options: IOption[];
}

export interface ICustomField {
    id: string;
    name: string;
    type: string;
    type_config: ITypeConfig;
    date_created: string;
    hide_from_guests: boolean;
    required: boolean;
}

export interface IList {
    id: string;
    name: string;
    access: boolean;
}

export interface IProject {
    id: string;
    name: string;
    hidden: boolean;
    access: boolean;
}

export interface IFolder {
    id: string;
    name: string;
    hidden: boolean;
    access: boolean;
}

export interface ISpace {
    id: string;
}

export interface IUser {
    id: number;
    username: string;
    email: string;
    initials: string;
    color: string;
    profilePicture: string;
}

export interface IAttachment {
    id: string;
    date: string;
    title: string;
    type: number;
    source: number;
    version: number;
    extension: string;
    thumbnail_small: string;
    thumbnail_medium: string;
    thumbnail_large: string;
    is_folder?: any;
    mimetype: string;
    hidden: boolean;
    parent_id: string;
    size: number;
    total_comments: number;
    resolved_comments: number;
    user: IUser;
    deleted: boolean;
    orientation?: any;
    url: string;
    email_data?: any;
    url_w_query: string;
    url_w_host: string;
}

export interface IRootObject {
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

