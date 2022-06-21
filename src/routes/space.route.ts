import { Router } from "express";
import { container } from "tsyringe";
import SpaceController from "../controllers/space.controller";
import SpaceService from "../services/space.service";

const spaceRouter = Router();

// var service: SpaceService = new SpaceService();
// const spaceController = new SpaceController(service);
// spaceRouter.get('/spaces/:spaceId', spaceController.get);

const spaceController = container.resolve(SpaceController);
spaceRouter.get('/allspaces/:spaceId', spaceController.get);
export default spaceRouter; 