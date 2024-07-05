import Item from "../../models/Item.js";

export default async (req, res, next) => {
    try {
        console.log('[CONTROLLER]: Controller to obtain the items');
        console.log('[CONTROLLER]: Searching items...');
        const items = await Item.find();
        console.log('[CONTROLLER]: Items found... ->', items.length);
        return res.status(200).json({
            success: true,
            response: items,
            message: "Items Found!!"
        });
    } catch (error) {
        return next(error);
    }
}