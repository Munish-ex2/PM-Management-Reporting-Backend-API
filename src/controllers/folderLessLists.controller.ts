import { autoInjectable } from "tsyringe";
import {Request, Response} from 'express';
import FolderLessListsService from "../services/folderLessLists.service";

@autoInjectable()
export default class FolderLessListsController{

    folderLessListService : FolderLessListsService;

    constructor(folderLessListService : FolderLessListsService){
        this.folderLessListService = folderLessListService;
    }

    get = async (req:Request, res: Response) => {
        var response = await this.folderLessListService.getFolderLessLists(req.params.spaceId);
        res.send(response.lists)
    }
}