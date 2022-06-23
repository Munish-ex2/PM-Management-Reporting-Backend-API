import { autoInjectable } from "tsyringe";
import { Request, Response } from "express";
import FilteredTasksService from "../services/filteredTasks.service";

@autoInjectable()
export default class FilteredTasksController{

    filteredTasksService : FilteredTasksService;

    constructor(filteredTaskService : FilteredTasksService){
        this.filteredTasksService = filteredTaskService;
    }

    getTasksWithSpaceId = async(req: Request, res: Response) => {
        let response = await this.filteredTasksService.getTasksWithSpaceId(req.params.workSpaceId, req.params.spaceId)
        res.send(response.tasks);
    }

    getTasksWithFolderId = async(req: Request, res: Response) => {
        let response = await this.filteredTasksService.getTasksWithFolderId(req.params.workSpaceId, req.params.folderId);
        res.send(response.tasks);
    }

    getTasksWithListId = async(req: Request, res: Response) => {
        let response = await this.filteredTasksService.getTasksWithListId(req.params.workSpaceId, req.params.listId);
        res.send(response.tasks);
    }

}