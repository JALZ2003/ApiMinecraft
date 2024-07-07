import { Schema, model, Types } from "mongoose";

const collection = "blocks";

const schema = new Schema({
    name: { type: String, },
    namespacedId: { type: String, },
    description: { type: String, },
    image: { type: String, },
    item: { type: Types.ObjectId, ref: "items" },
    tool: { type: String, },
    flammable: { type: Boolean, },
    transparent: { type: Boolean, },
    luminance: { type: Number, },
    blastResistance: { type: Number },
    colors: { type: Array }
}, {
    timestamps: true
})

const Block = model(collection, schema);

export default Block;