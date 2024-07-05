import mongoose from "mongoose";

mongoose.connect(process.env.URL_DB).then(() => console.log("Database Connected!!")).catch(() => console.log("Error Connection Database!!"));