import { Router } from "express";

// Controllers
import signout from "../controllers/admins/signout.js";
import token from "../controllers/admins/token.js";
import signin from "../controllers/admins/signin.js";

// Middlwares
import requested_method from "../middlewares/requested_method.js";
import accountNotExist from "../middlewares/accountNotExist.js";
import validatPassword from "../middlewares/validatPassword.js";
import generateToken from "../middlewares/generateToken.js";
import validator from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";

// Schemas
import schemaSignin from "../schemas/admins/signin.js";

const adminsRouter = Router();

adminsRouter.post("/signin", requested_method, validator(schemaSignin), accountNotExist, validatPassword, generateToken, signin);
adminsRouter.post("/token", requested_method, passport.authenticate('jwt', { session: false }), generateToken, token);
adminsRouter.post("/signout", requested_method, passport.authenticate('jwt', { session: false }), signout);

export default adminsRouter;