import { Router } from "express";
import { container } from "tsyringe";
import ListsController from "../controllers/lists.controller";

const listRouter = Router();

const listsController = container.resolve(ListsController);
listRouter.get('/alllists/:folderId', listsController.get);
export default listRouter; 
