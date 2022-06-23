import { autoInjectable } from "tsyringe";
import WorkSpacesService from "../services/workSpaces.service";
import {Request, Response} from 'express';

@autoInjectable()
export default class WorkSpacesController{

    workSpacesService : WorkSpacesService;

    constructor(workSpacesService : WorkSpacesService){
        this.workSpacesService = workSpacesService;
    }

    get =async (req:Request, res: Response) => {
        var response = await this.workSpacesService.getWorkSpaces();
        res.send(response.teams);
    }

}