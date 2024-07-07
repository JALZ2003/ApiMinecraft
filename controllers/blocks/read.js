import Block from "../../models/Block.js";

export default async (req, res, next) => {
    try {
        console.log("[SYSTEM]: Controller to get the blocks")
        console.log("[SYSTEM]: Searching for blocks...");

        const queries = {};
        const ordering = { name: 1 };
        const pagination = { page: 1, limit: 10 };

        if (req.query.name) { queries.name = new RegExp(req.query.name.trim(), 'i'); }
        if (req.query.item) { queries.item = req.query.item.split(','); }
        if (req.query.tool) { queries.tool = new RegExp(req.query.tool.trim(), 'i'); }
        if (req.query.flammable) { queries.flammable = Boolean(req.query.flammable); }
        if (req.query.transparent) { queries.transparent = Boolean(req.query.transparent); }
        if (req.query.luminance) { queries.luminance = { $gte: Number(req.query.luminance) } }
        if (req.query.blastResistance) { queries.blastResistance = { $gte: Number(req.query.blastResistance) }; }

        if (req.query.sort) { ordering.name = Number(req.query.sort); }
        if (req.query.page) { pagination.page = Number(req.query.page); }
        if (req.query.quantity) { pagination.limit = Number(req.query.quantity); }


        const skip = pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0;
        const limit = pagination.limit > 0 ? pagination.limit : 10;
        const allBlocks = await Block.countDocuments(queries);

        const pages = Math.ceil(allBlocks / pagination.limit);
        const prev = pagination.page === 1 ? null : pagination.page - 1;
        const next = pagination.page === pages ? null : pagination.page + 1;

        const blocks = await Block.find(queries, "-createdAt -updatedAt -__v")
            .populate("item", "-_id -__v -createdAt -updatedAt").skip(skip).limit(limit).sort(ordering);

        console.log("[SYSTEM]: Found blocks... ->", allBlocks);
        if (blocks.length != 0) {
            return res.status(200).json({
                success: true,
                response: { blocks, prev, next },
                message: "Block Found!!"
            });
        } else {
            return res.status(404).json({
                success: false,
                response: null,
                message: "Block Not Found!!"
            });
        }
    } catch (error) {
        return next(error);
    }
}