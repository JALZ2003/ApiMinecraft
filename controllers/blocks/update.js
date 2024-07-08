import Block from "../../models/Block.js";

export default async (req, res, next) => {
    try {
        console.log(`[SYSTEM]: Updating in process...`);
        const block = await Block.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(`[SYSTEM]: Update successful... -> ${block}`);
        return res.status(200).json({
            success: true,
            response: `Updated -> ${req.params.id}`,
            message: "Updated successfully"
        });
    } catch (error) {
        return next(error);
    }
}