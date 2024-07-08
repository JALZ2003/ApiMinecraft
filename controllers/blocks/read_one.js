import Block from "../../models/Block.js";

export default async (req, res, next) => {
    try {
        const block = await Block.findById(req.params.id);
        if (block) {
            return res.status(200).json({
                success: true,
                response: block,
                message: "Block found!!"
            });
        }
        return res.status(404).json({
            success: false,
            response: null,
            message: "Block not found!!"
        });
    } catch (error) {
        return next(error);
    }
}