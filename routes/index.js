import { Router } from "express";
import blocksRouter from "./blocks.js";
import itemsRouter from "./items.js";
import recipesRouter from "./recipes.js";
import adminsRouter from "./admins.js";

const indexRouter = Router();

indexRouter.use('/blocks', (req, res, next) => { console.log(`[ROUTER]: Block path...`); return next() }, blocksRouter);
indexRouter.use('/items', (req, res, next) => { console.log(`[ROUTER]: Items path...`); return next() }, itemsRouter);
indexRouter.use('/recipes', (req, res, next) => { console.log(`[ROUTER]: Recipes path...`); return next() }, recipesRouter);
indexRouter.use('/admins', (req, res, next) => { console.log(`[ROUTER]: Recipes path...`); return next() }, adminsRouter)

export default indexRouter;