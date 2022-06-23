import SpaceService from "../services/space.service";
import {Request, Response} from 'express';
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class SpaceController{

    spaceService: SpaceService;

    constructor(spaceService: SpaceService){
        this.spaceService = spaceService;
    }

    get = async(req: Request, res: Response) => {
        var response = await this.spaceService.getSpaces(req.params.spaceId);
        // res.json(resource.spaces);
        if(response.spaces == null){
            res.status(400).json("Bad Request");
        }
        res.send(response.spaces);
    }
}