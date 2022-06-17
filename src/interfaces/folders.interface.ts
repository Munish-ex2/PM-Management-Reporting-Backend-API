export interface ISpace {
    id: string;
    name: string;
}

export interface IStatus {
    status: string;
    color: string;
    hide_label: boolean;
}

export interface IPriority {
    priority: string;
    color: string;
}

export interface IAssignee {
    color: string;
    username: string;
    initials: string;
    profilePicture?: any;
}

export interface ISpace2 {
    id: string;
    name: string;
    access: boolean;
}

export interface IStatus2 {
    id: string;
    status: string;
    orderindex: number;
    color: string;
    type: string;
}

export interface IList {
    id: string;
    name: string;
    orderindex: number;
    status: IStatus;
    priority: IPriority;
    assignee: IAssignee;
    task_count: number;
    due_date: string;
    start_date?: any;
    space: ISpace2;
    archived: boolean;
    override_statuses?: boolean;
    statuses: IStatus2[];
    permission_level: string;
    content: string;
}

export interface IFolder {
    id: string;
    name: string;
    orderindex: number;
    override_statuses: boolean;
    hidden: boolean;
    space: ISpace;
    task_count: string;
    archived: boolean;
    statuses: any[];
    lists: IList[];
    permission_level: string;
}

export interface IRootObject {
    folders: IFolder[];
}

