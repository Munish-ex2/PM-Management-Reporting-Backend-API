import axios from "axios";
import { autoInjectable } from "tsyringe";
import ListsModel from "../models/lists.model";
import BaseService from "./base.service";

@autoInjectable()
export default class ListService extends BaseService{

    constructor(){
        super();
    }

    getLists = async (folderId: string) : Promise<ListsModel> => {
        var listsModel : ListsModel = new ListsModel();
        try{
            const response = await axios({
                url : `https://api.clickup.com/api/v2/folder/${folderId}/list`,
                method: "get",
                headers: {
                    "Authorization":this.accessToken
                }
            });
            listsModel.lists = response.data.lists;
        }catch{
            listsModel.lists = null;
        }
        return listsModel;
    } 
    

}