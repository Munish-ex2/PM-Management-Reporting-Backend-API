import axios from "axios";
import { autoInjectable } from "tsyringe";
import FolderLessListsModel from "../models/folderlessLists.model";
import BaseService from "./base.service"

@autoInjectable()
export default class FolderLessListsService extends BaseService{

    constructor(){
        super();
    }

    getFolderLessLists = async(spaceId : string) : Promise<FolderLessListsModel> => {

        var folderLessListModel : FolderLessListsModel = new FolderLessListsModel();
        try{
            const response = await axios({
                url : `https://api.clickup.com/api/v2/space/${spaceId}/list`,
                method : "get",
                headers: {
                    "Authorization":this.accessToken
                }
            })
            folderLessListModel.lists = response.data.lists;
        }catch{
            folderLessListModel.lists = null;
        }
        return folderLessListModel;
    }
}