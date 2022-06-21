import { Router } from "express";
import {container} from "tsyringe";
import AssigneesController from "../controllers/assignees.controller";

const assigneeRouter = Router();
const assigneesController = container.resolve(AssigneesController);

assigneeRouter.get('/allassignees/:taskId', assigneesController.get);

export default assigneeRouter;