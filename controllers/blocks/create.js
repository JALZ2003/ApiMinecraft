import Block from "../../models/Block.js";

export default async (req, res, next) => {
    try {
        console.log(`[SYSTEM]: Creating a new Block in Process...`);
        const newBlock = await Block.create(req.body);
        console.log(`[SYSTEM]: Block created successfully -> ${newBlock}`);
        return res.status(200).json({
            success: true,
            response: newBlock,
            message: `Successfully created`
        });
    } catch (error) {
        return next(error);
    }
}