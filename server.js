// Import database and dotenv
import "dotenv/config.js";
import "./config/connectionDb.js";

// Import modules
import express from 'express';
import cors from "cors";
import morgan from "morgan";

// Import routes
import indexRouter from "./router/index.js";

// Import error handlers
import not_found_handler from "./middlewares/not_found_handler.js";
import error_handler from "./middlewares/error_handler.js";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors())
server.use(morgan("dev"));

server.use("/api", (req, res, next) => {console.log(`[ROUTER]: Loading main route...`); return next()}, indexRouter)
server.use(not_found_handler)
server.use(error_handler);

server.listen(process.env.PORT, () => console.log('Server Ready!!'));