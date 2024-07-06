// Import database and dotenv
import "dotenv/config.js";
import "./config/connectionDb.js";

// Import modules
import express from 'express';
import cors from "cors";
import morgan from "morgan";

// Import routes
import indexRouter from "./routes/index.js";

// Import error handlers
import not_found_handler from "./middlewares/not_found_handler.js";
import error_handler from "./middlewares/error_handler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan("dev"));

app.use("/api", (req, res, next) => { console.log(`[ROUTER]: Loading main route...`); return next() }, indexRouter)
app.use(not_found_handler)
app.use(error_handler);

app.listen(process.env.PORT, () => console.log('Server Ready in port:', process.env.PORT));

export default app;