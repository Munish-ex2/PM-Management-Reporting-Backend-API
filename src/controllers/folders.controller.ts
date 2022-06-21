import FoldersService from "../services/folders.service";
import { Request, Response } from "express";
import { autoInjectable } from "tsyringe";
import FoldersModel from "../models/folders.model";

@autoInjectable()
export default class FoldersController{
    service: FoldersService
    constructor(service: FoldersService){
        this.service = service;
    }

    get = async (req : Request, res : Response) =>{
        const response : FoldersModel = await this.service.getFolders(req.params.spaceId);
        if(response.folders == null){
            res.status(400).send("Bad Request");
        }
        res.send(response.folders.length.toString());
    }
}