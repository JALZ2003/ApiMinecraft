import { Schema, model, Types } from "mongoose";

const collection = "recipes";

const schema = new Schema({
    item: { type: Types.ObjectId },
    quantity: { type: Number },
    recipe: { type: Array },
    shapeless: { type: Boolean }
}, {
    timestamps: true
});

const Recipe = model(collection, schema);

export default Recipe;