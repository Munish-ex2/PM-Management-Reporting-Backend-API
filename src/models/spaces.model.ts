import {IRootObject, ISpace} from "../interfaces/spaces.interface";

class SpacesModel implements IRootObject{
    spaces: ISpace[] | null;
}

export default SpacesModel;