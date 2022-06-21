export interface IAssignee {
    id: number;
    username: string;
    color: string;
    initials: string;
    email: string;
    profilePicture?: any;
}

export interface IRootObject{
    assignees: IAssignee[] | null;
}