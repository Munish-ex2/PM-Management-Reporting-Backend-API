export interface IStatus {
    status: string;
    type: string;
    orderindex: number;
    color: string;
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
    email: string;
    profilePicture: string;
}

export interface IWatcher {
    id: number;
    username: string;
    color: string;
    email: string;
    profilePicture: string;
}

export interface IItem {
    id: string;
    name: string;
    orderindex: number;
    assignee?: any;
    resolved: boolean;
    parent?: any;
    date_created: string;
    children: any[];
}

export interface IChecklist {
    id: string;
    task_id: string;
    name: string;
    date_created: string;
    orderindex: number;
    creator: number;
    resolved: number;
    unresolved: number;
    items: IItem[];
}

export interface ITag {
    name: string;
    tag_fg: string;
    tag_bg: string;
}

export interface ITypeConfig {
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

export interface ITask {
    id: string;
    custom_id?: any;
    name: string;
    text_content: string;
    description: string;
    status: IStatus;
    orderindex: string;
    date_created: string;
    date_updated: string;
    date_closed: string;
    creator: ICreator;
    assignees: IAssignee[];
    watchers: IWatcher[];
    checklists: IChecklist[];
    tags: ITag[];
    parent: string;
    priority: number;
    due_date: string;
    start_date: string;
    points: number;
    time_estimate: number;
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
}

export interface IRootObject {
    tasks: ITask[];
}

