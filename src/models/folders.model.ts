import {IFolder, IRootObject} from "../interfaces/folders.interface"

class FoldersModel implements IRootObject{
    folders: IFolder[] | null;
}

export default FoldersModel;