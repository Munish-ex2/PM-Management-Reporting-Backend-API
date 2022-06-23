import axios from "axios";
import { autoInjectable } from "tsyringe";
import WorkSpacesModel from "../models/workspaces.model";
import BaseService from "./base.service";

@autoInjectable()
export default class WorkSpacesService extends BaseService{

    constructor(){
        super();
    }

    getWorkSpaces = async() : Promise<WorkSpacesModel>=> {
        var workSpacesModel : WorkSpacesModel = new WorkSpacesModel();
        try{
            const response = await axios({
                url : `https://api.clickup.com/api/v2/team`,
                method: "get",
                headers: {
                    "Authorization":this.accessToken
                }
            });
            workSpacesModel.teams = response.data.teams;
        }catch{
            workSpacesModel.teams = null;
        }
        return workSpacesModel;
    }

}