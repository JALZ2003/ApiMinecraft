import { Router } from "express";

// Controllers
import create from "../controllers/blocks/create.js";
import read from "../controllers/blocks/read.js";

// Middlwares
import requested_method from "../middlewares/requested_method.js";
import exist_block from "../middlewares/exist_block.js";
import validator from "../middlewares/validator.js";

// Schema
import schemaBlocks from "../schemas/blocks/create.js";

const blocksRouter = Router();

blocksRouter.get('/', requested_method, read);
blocksRouter.post('/', requested_method, validator(schemaBlocks), exist_block, create);

export default blocksRouter;