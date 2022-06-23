import { IRootObject, ITeam } from "../interfaces/workspaces.interface";

class WorkSpacesModel implements IRootObject{
    teams : ITeam[] | null;
}

export default WorkSpacesModel;