import { IAssignee, IRootObject } from "../interfaces/assignees.interface";

export default class AssigneesModel implements IRootObject{
    assignees: IAssignee[];
}