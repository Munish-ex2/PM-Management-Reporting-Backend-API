import { autoInjectable } from "tsyringe";
import TimeTrackedService from "../services/timetracked.service";
import {Request, Response} from "express";

@autoInjectable()
export default class TimeTrackedController{
    service: TimeTrackedService;
    constructor(service: TimeTrackedService){
        this.service = service;
    }

    get = async(req: Request, res:Response) => {
        const response = await this.service.getTimeTracked(req.params.taskId);
        if(response.data == null){
            res.status(400).send("Bad Request");
        }
        res.json(response.data);
    }
}