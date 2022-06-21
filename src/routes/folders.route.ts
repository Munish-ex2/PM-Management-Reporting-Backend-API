import { Router } from "express";
import {container} from "tsyringe";
import FoldersController from "../controllers/folders.controller";
import FoldersService from "../services/folders.service";

const folderRouter = Router();
var foldersController = container.resolve(FoldersController);

folderRouter.get('/allfolders/:spaceId', foldersController.get);


export default folderRouter;