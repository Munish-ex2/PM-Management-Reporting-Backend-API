export interface IUser {
    id: number;
    username: string;
    email: string;
    color: string;
    profilePicture: string;
    initials: string;
    role: number;
    custom_role?: any;
    last_active: string;
    date_joined: string;
    date_invited: string;
}

export interface IInvitedBy {
    id: number;
    username: string;
    color: string;
    email: string;
    initials: string;
    profilePicture: string;
}

export interface IMember {
    user: IUser;
    invited_by: IInvitedBy;
    can_see_time_spent?: boolean;
    can_see_time_estimated?: boolean;
    can_see_points_estimated?: boolean;
    can_edit_tags?: boolean;
    can_create_views?: boolean;
}

export interface ITeam {
    id: string;
    name: string;
    color: string;
    avatar: string;
    members: IMember[];
}

export interface IRootObject {
    teams: ITeam[];
}
