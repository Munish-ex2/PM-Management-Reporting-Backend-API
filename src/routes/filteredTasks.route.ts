import { Router } from "express";
import { container } from "tsyringe";
import FilteredTasksController from "../controllers/filteredTasks.controller";

const filteredTasksController = container.resolve(FilteredTasksController);

const filteredTasksWithWorkSpaceIdRouter = Router();
filteredTasksWithWorkSpaceIdRouter.get('/getTasksWithWorkSpaceId/:workSpaceId/:spaceId', filteredTasksController.getTasksWithSpaceId);

const filteredTasksWithFolderIdRouter = Router();
filteredTasksWithFolderIdRouter.get('/getTasksWithFolderId/:workSpaceId/:folderId', filteredTasksController.getTasksWithFolderId);

const filteredTasksWithListIdRouter = Router();
filteredTasksWithListIdRouter.get('/getTasksWithListId/:workSpaceId/:listId', filteredTasksController.getTasksWithListId);


export {filteredTasksWithWorkSpaceIdRouter, filteredTasksWithFolderIdRouter, filteredTasksWithListIdRouter};

