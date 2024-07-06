import { Router } from "express";

const adminsRouter = Router();

adminsRouter.post("/signin", (req, res) => res.send("En desarrollo"));
adminsRouter.post("/token", (req, res) => res.send("En desarrollo"));
adminsRouter.post("/signout", (req, res) => res.send("En desarrollo"));

export default adminsRouter;