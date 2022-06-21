import FoldersModel from "../models/folders.model";
import BaseService from "./base.service";
import axios from "axios";
import { injectable } from "tsyringe";

@injectable()
export default class FoldersService extends BaseService{
    constructor(){
        super();
    }
    getFolders = async (spaceId: string) : Promise<FoldersModel> => {
        var x : FoldersModel = new FoldersModel();
        try {
            const response = await axios({
                url: `https://api.clickup.com/api/v2/space/${spaceId}/folder`,
                method: "get",
                headers:{
                    "Authorization" : this.accessToken
                }
            })
            x.folders = response.data.folders;
        } catch (error) {
            x.folders = null;
        }
        return x;
    }
}