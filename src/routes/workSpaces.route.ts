import { Router } from "express";
import { container } from "tsyringe";
import WorkSpacesController from "../controllers/workSpaces.controller";

const workSpacesRouter = Router();

const workSpacesController = container.resolve(WorkSpacesController);
workSpacesRouter.get('/', workSpacesController.get);

export default workSpacesRouter;