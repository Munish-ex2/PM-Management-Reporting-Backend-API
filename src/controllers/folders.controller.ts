import FoldersService from "../services/folders.service";
import { Request, Response } from "express";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class FoldersController{
    service: FoldersService
    constructor(service?: FoldersService){
        this.service = service;
    }

    getFolders = async (req : Request, res : Response) =>{
        const response = await this.service.getFolders();
        res.json(response);
    }
}