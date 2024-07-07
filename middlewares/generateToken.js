import jwt from "jsonwebtoken";

export default (req, res, next) => {
    console.log("[SYSTEM]: Generating Token in Process...");
    req.token = jwt.sign({ _id: req.admin._id }, process.env.SECRET, { expiresIn: 60 * 60 * 24 * 7 });
    console.log("[SYSTEM]: Token Generated Successfully ->", req.token);
    return next();
}