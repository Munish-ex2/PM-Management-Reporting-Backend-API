import { Router } from "express";
import FoldersController from "../controllers/folders.controller";
import FoldersService from "../services/folders.service";

const folderRouter = Router();
var service : FoldersService = new FoldersService('14730797'); 
const foldersController = new FoldersController(service);

folderRouter.get('/allfolders', foldersController.getFolders);


export default folderRouter;