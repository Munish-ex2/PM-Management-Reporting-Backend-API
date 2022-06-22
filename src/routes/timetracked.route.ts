import { Router } from "express";
import { container } from "tsyringe";
import TimeTrackedController from "../controllers/timetracked.controller";

const timetrackedRouter = Router();

var timeTrackedController = container.resolve(TimeTrackedController);
timetrackedRouter.get('/track/:taskId', timeTrackedController.get);

export default timetrackedRouter;