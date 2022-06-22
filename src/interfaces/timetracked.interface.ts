interface IUser {
    id: number;
    username: string;
    email: string;
    color: string;
    initials: string;
    profilePicture: string;
}

interface IInterval {
    id: string;
    start: string;
    end: string;
    time: string;
    source: string;
    date_added: string;
    billable: boolean;
    description: string;
    tags?: any;
}

interface IDatum {
    user: IUser;
    time: number;
    intervals: IInterval[];
}

interface IRootObject {
    data: IDatum[] | null;
}

export {IDatum, IRootObject}

