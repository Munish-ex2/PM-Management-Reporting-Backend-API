import BaseService from "./base.service";
import TaskModel from "../models/task.model";
import axios from "axios";
import AssigneesModel from "../models/assignees.model";

export default class AssigneesService extends BaseService{
    constructor(){
        super();
    }

    getAssignees = async(taskId: string) : Promise<AssigneesModel>=>{
        var assignees = new AssigneesModel()
        try {
            const response = await axios({
                url:`https://api.clickup.com/api/v2/task/${taskId}/`,
                method:"get",
                headers:{
                    "Authorization":this.accessToken
                }
            })
            assignees.assignees = response.data.assignees;
        } catch (error) {
            assignees.assignees = null;
        }
        return assignees;
    }
}