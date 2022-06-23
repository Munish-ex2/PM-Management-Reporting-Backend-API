import axios from "axios";
import { autoInjectable } from "tsyringe";
import FilteredTaskModel from "../models/filteredTask.model";
import BaseService from "./base.service";

@autoInjectable()
export default class FilteredTasksService extends BaseService{

    constructor(){
        super();
    }

    getTasksWithSpaceId = async(workSpaceId : string, spaceId : string) : Promise<FilteredTaskModel> => {
        let filteredTaskModel : FilteredTaskModel = new FilteredTaskModel();
        try{
            const response = await axios({
                url : `https://api.clickup.com/api/v2/team/${workSpaceId}/task?space_ids%5B%5D=${spaceId}`,
                method: "get",
                headers: {
                    "Authorization":this.accessToken
                }
            });
            filteredTaskModel.tasks = response.data.tasks;
        }catch{
            filteredTaskModel.tasks = null;
        }
        return filteredTaskModel;
    }

    getTasksWithFolderId = async(workSpaceId : string, folderId: string) : Promise<FilteredTaskModel> => {
        let filteredTaskModel: FilteredTaskModel = new FilteredTaskModel(); 
        try{
            const response = await axios({
                url : `https://api.clickup.com/api/v2/team/${workSpaceId}/task?project_ids%5B%5D=${folderId}`,
                method: "get",
                headers: {
                    "Authorization":this.accessToken
                }
            });
            filteredTaskModel.tasks = response.data.tasks;
        }catch{
            filteredTaskModel.tasks = null;
        }
        return filteredTaskModel;
    }

    getTasksWithListId =async (workSpaceId : string, listId : string) : Promise<FilteredTaskModel> => {
        let filteredTaskModel: FilteredTaskModel = new FilteredTaskModel(); 
        try{
            const response = await axios({
                url : `https://api.clickup.com/api/v2/team/${workSpaceId}/task?list_ids%5B%5D=${listId}`,
                method: "get",
                headers: {
                    "Authorization":this.accessToken
                }
            });
            filteredTaskModel.tasks = response.data.tasks;
        }catch{
            filteredTaskModel.tasks = null;
        }
        return filteredTaskModel;
    }

}