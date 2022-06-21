import AssigneesService from "../services/assignees.servies";
import {Request, Response} from "express";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class AssigneesController{
    service: AssigneesService
    constructor(service: AssigneesService){
        this.service = service;
    }

    get = async(req: Request, res: Response) => {
        const response = await this.service.getAssignees(req.params.taskId);
        if(response.data == null){
            res.status(400).send("Bad Request");
        }
        res.json(response.data);
    }
}