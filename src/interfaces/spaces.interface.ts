export interface IStatus {
    id: string;
    status: string;
    type: string;
    orderindex: number;
    color: string;
}

export interface IDueDates {
    enabled: boolean;
    start_date: boolean;
    remap_due_dates: boolean;
    remap_closed_due_date: boolean;
}

export interface ISprints {
    enabled: boolean;
}

export interface ITimeTracking {
    enabled: boolean;
    harvest: boolean;
    rollup: boolean;
}

export interface IPoints {
    enabled: boolean;
}

export interface ICustomItems {
    enabled: boolean;
}

export interface IPriority {
    id: string;
    priority: string;
    color: string;
    orderindex: string;
}

export interface IPriorities {
    enabled: boolean;
    priorities: IPriority[];
}

export interface ITags {
    enabled: boolean;
}

export interface ITimeEstimates {
    enabled: boolean;
    rollup: boolean;
    per_assignee: boolean;
}

export interface ICheckUnresolved {
    enabled: boolean;
    subtasks?: any;
    checklists?: any;
    comments?: any;
}

export interface IZoom {
    enabled: boolean;
}

export interface IMilestones {
    enabled: boolean;
}

export interface ICustomFields {
    enabled: boolean;
}

export interface IRemapDependencies {
    enabled: boolean;
}

export interface IDependencyWarning {
    enabled: boolean;
}

export interface IMultipleAssignees {
    enabled: boolean;
}

export interface IEmails {
    enabled: boolean;
}

export interface IFeatures {
    due_dates: IDueDates;
    sprints: ISprints;
    time_tracking: ITimeTracking;
    points: IPoints;
    custom_items: ICustomItems;
    priorities: IPriorities;
    tags: ITags;
    time_estimates: ITimeEstimates;
    check_unresolved: ICheckUnresolved;
    zoom: IZoom;
    milestones: IMilestones;
    custom_fields: ICustomFields;
    remap_dependencies: IRemapDependencies;
    dependency_warning: IDependencyWarning;
    multiple_assignees: IMultipleAssignees;
    emails: IEmails;
}

export interface IUser {
    id: number;
    username: string;
    color: string;
    profilePicture: string;
    initials: string;
}

export interface IMember {
    user: IUser;
}

export interface ISpace {
    id: string;
    name: string;
    color: string;
    private: boolean;
    avatar?: any;
    admin_can_manage?: boolean;
    statuses: IStatus[];
    multiple_assignees: boolean;
    features: IFeatures;
    archived: boolean;
    members: IMember[];
}

export interface IRootObject {
    spaces: ISpace[];
}


