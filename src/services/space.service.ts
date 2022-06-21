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
        var x : SpacesModel = new SpacesModel();
        try{
            const response = await axios({
                url : `https://api.clickup.com/api/v2/team/${workSpaceId}/space`,
                method: "get",
                headers: {
                    "Authorization":this.accessToken
                }
            });
            x.spaces = response.data.spaces;
        }catch(error) {
            x.spaces = null;
        }
        return x;
    }
} 