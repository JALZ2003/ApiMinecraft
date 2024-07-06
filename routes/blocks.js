import { Router } from "express";
import read from "../controllers/blocks/read.js";
import requested_method from "../middlewares/requested_method.js";

const blocksRouter = Router();

blocksRouter.get('/', requested_method, read);

export default blocksRouter;