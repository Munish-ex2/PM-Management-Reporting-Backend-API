import BaseService from "./base.service";
import axios from 'axios';
import SpacesModel from "../models/spaces.model";
import { autoInjectable } from "tsyringe";


@autoInjectable()
export default class SpaceService extends BaseService{
    constructor(){
        super();
        // this.workspaceId = workspaceId;
        // this.url = ; 
    }

    getSpaces = async (workSpaceId: string) : Promise<SpacesModel>=> {
        var spacesModel : SpacesModel = new SpacesModel();
        try{
            const response = await axios({
                url : `https://api.clickup.com/api/v2/team/${workSpaceId}/space`,
                method: "get",
                headers: {
                    "Authorization":this.accessToken
                }
            });
            spacesModel.spaces = response.data.spaces;
        }catch(error) {
            spacesModel.spaces = null;
        }
        return spacesModel;
    }
} 