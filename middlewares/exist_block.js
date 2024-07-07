import Block from "../models/Block.js";

export default async (req, res, next) => {
    try {
        const block = await Block.findOne(req.body.name);
        if (block) {
            return res.status(406).json({
                success: false,
                response: null,
                message: `Block -> ${req.body.name} exist!!`
            });
        }
        return next();
    } catch (error) {
        return next(error);
    }
}