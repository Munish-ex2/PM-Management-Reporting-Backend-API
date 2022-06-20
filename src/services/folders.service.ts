import FoldersModel from "../models/folders.model";
import BaseService from "./base.service";
import axios from "axios";
import { injectable } from "tsyringe";

@injectable()
export default class FoldersService extends BaseService{
    constructor(spaceId: string){
        super();
        this.spaceId = spaceId; 
    }
    async getFolders() : Promise<FoldersModel | string>{
        try {
            const response = await axios({
                url: `https://api.clickup.com/api/v2/space/${this.spaceId}/folder`,
                method: "get",
                headers:{
                    "Authorzation" : this.accessToken
                }
            })
            var x : FoldersModel = new FoldersModel();
            x.folders = response.data.folders;
            return x;
        } catch (error) {
            return error.message;
        }
    }
}