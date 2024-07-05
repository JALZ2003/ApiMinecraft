import { Schema, model, Types } from "mongoose";

const collection = "items";

const schema = new Schema({
    name: { type: String, required: true },
    namespacedId: { type: String, required: true },
    image: { type: String, required: true },
    renewable: { type: Boolean, required: true },
    stackSize: { type: Number, required: true }
}, {
    timestamps: true,
});

const Item = model(collection, schema);

export default Item;