import Block from "../../models/Block.js";

export default async (req, res, next) => {
    try {
        await Block.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({
            success: true,
            response: `Updated -> ${req.params.id}`,
            message: "Updated successfully"
        });
    } catch (error) {
        return next(error);
    }
}