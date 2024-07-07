import { Router } from "express";

// Controllers
import destroy from "../controllers/blocks/destroy.js";
import create from "../controllers/blocks/create.js";
import update from "../controllers/blocks/update.js";
import read from "../controllers/blocks/read.js";

// Middlwares
import requested_method from "../middlewares/requested_method.js";
import exist_block from "../middlewares/exist_block.js";
import validator from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import isBlock from "../middlewares/isBlock.js";

// Schema
import schemaBlocks from "../schemas/blocks/create.js";

const blocksRouter = Router();

blocksRouter.get('/', requested_method, read);
blocksRouter.post('/', requested_method, passport.authenticate('jwt', { session: false }), validator(schemaBlocks), exist_block, create);
blocksRouter.put('/:id', requested_method, passport.authenticate('jwt', { session: false }), isBlock, update);
blocksRouter.delete('/:id', requested_method, passport.authenticate('jwt', { session: false }), isBlock, destroy);

export default blocksRouter;