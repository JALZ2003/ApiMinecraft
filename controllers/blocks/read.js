import Block from "../../models/Block.js";

export default async (req, res, next) => {
    try {
        console.log("[CONTROLLER]: Controller to get the blocks")
        console.log("[CONTROLLER]: Searching for blocks...");
        const blocks = await Block.find();
        console.log("[CONTROLLER]: Found blocks... ->", blocks.length);
        return res.status(200).json({
            success: true,
            response: blocks,
            message: "Block Found!!"
        });
    } catch (error) {
        return next(error);
    }
}