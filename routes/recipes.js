import { Router } from "express";
import read from "../controllers/recipes/read.js";
import requested_method from "../middlewares/requested_method.js";

const recipesRouter = Router();

recipesRouter.get('/', requested_method, read);

export default recipesRouter;