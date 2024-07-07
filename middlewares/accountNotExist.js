import Admin from "../models/Admin.js";

export default async (req, res, next) => {
    try {
        console.log(`[SYSTEM]: validating if the account exists -> ${req.body.email}`);
        const admin = await Admin.findOne({ email: req.body.email });
        console.log(`[SYSTEM]: Validation successful -> ${admin ? true : false}`);
        if (admin) {
            req.admin = {
                _id: admin._id,
                name: admin.name,
                email: admin.email,
                password: admin.password,
                role: admin.role
            };
            return next();
        }
        return res.status(404).json({
            success: false,
            response: null,
            messages: ["Admin does not exist!!"]
        });
    } catch (error) {
        return next(error);
    }
}