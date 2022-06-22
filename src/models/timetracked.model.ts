import {IRootObject, IDatum} from "../interfaces/timetracked.interface";

export default class TimeTrackedModel implements IRootObject{
    data: IDatum[] | null;
}