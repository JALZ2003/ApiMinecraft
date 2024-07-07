import Block from "../../models/Block.js";

export default async (req, res, next) => {
    try {
        const block = await Block.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            success: true,
            response: block,
            message: 'Block deleted successfully!'
        });
    } catch (error) {
        return next(error);
    }
}