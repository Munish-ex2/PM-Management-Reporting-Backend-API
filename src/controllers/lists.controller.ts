import { autoInjectable } from "tsyringe";
import ListService from "../services/lists.service";
import {Request, Response} from 'express';

@autoInjectable()
export default class ListsController{
    
    listService : ListService;

    constructor(listService : ListService){
        this.listService = listService;
    }

    get = async(req: Request, res: Response) => {
        var response = await this.listService.getLists(req.params.folderId);
        // res.json(resource.spaces);
        res.send(response.lists);
    }

}