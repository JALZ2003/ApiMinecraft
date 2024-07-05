import { Router } from "express";
import read from "../controllers/items/read.js";
import requested_method from "../middlewares/requested_method.js";

const itemsRouter = Router();

itemsRouter.get('/', requested_method, read);

export default itemsRouter;