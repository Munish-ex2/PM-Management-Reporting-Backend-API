import {IList, IRootObject} from "../interfaces/lists.interface";

class ListsModel implements IRootObject{
    lists: IList[] | null;
}

export default ListsModel;