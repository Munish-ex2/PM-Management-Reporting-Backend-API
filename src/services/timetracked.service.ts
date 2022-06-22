import BaseService from "./base.service";
import TimeTrackedModel from "../models/timetracked.model";
import axios from "axios";

export default class TimeTrackedService extends BaseService{
    constructor(){
        super();
    }
    getTimeTracked = async (taskId: string) : Promise<TimeTrackedModel>=>{
        var x = new TimeTrackedModel();
        try{
            const response = await axios({
                url:`https://api.clickup.com/api/v2/task/${taskId}/time/`,
                method:"get",
                headers:{
                    "Authorization":this.accessToken
                }
            })
            x.data = response.data.data;
        }
        catch(error){
            x.data = null
        }
        return x;
    }
}