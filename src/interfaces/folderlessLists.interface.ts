export interface IFolder {
    id: string;
    name: string;
    hidden: boolean;
    access: boolean;
}

export interface ISpace {
    id: string;
    name: string;
    access: boolean;
}

export interface IList {
    id: string;
    name: string;
    orderindex: number;
    status?: any;
    priority?: any;
    assignee?: any;
    task_count: number;
    due_date?: any;
    start_date?: any;
    folder: IFolder;
    space: ISpace;
    archived: boolean;
    override_statuses: boolean;
    permission_level: string;
}

export interface IRootObject {
    lists: IList[];
}

