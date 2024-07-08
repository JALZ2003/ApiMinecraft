import Block from "../models/Block.js";

export default async (req, res, next) => {
    try {
        console.log(`[SYSTEM]: Found Block in database...`);
        const block = await Block.findById(req.params.id);
        console.log(`[SYSTEM]: Block found -> ${block}`);
        if (block) {
            return next();
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: 'Block not found!!'
        });
    } catch (error) {
        return next(error);
    }
}