import { Router } from "express";
import { container } from "tsyringe";
import FolderLessListsController from "../controllers/folderLessLists.controller";


const folderLessListsRouter = Router();

const folderLessListsController = container.resolve(FolderLessListsController);
folderLessListsRouter.get('/folderlessalllists/:spaceId', folderLessListsController.get);

export default folderLessListsRouter;
