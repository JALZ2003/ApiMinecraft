import { Schema, model, Types } from "mongoose";

const collections = "admins";

const schema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    confirmPassword: { type: String, require: true },
    role: { type: Number, default: 2 },
    active: { type: Boolean, default: false },
}, {
    timestamps: true
});

const Admin = model(collections, schema);

export default Admin;