import Admin from "../models/Admin.js";

export default async (req, res, next) => {
    try {
        console.log(`[SYSTEM]: validating if the account exists -> ${req.body.email}`);
        const user = await Admin.findOne({ email: req.body.email });
        console.log(`[SYSTEM]: Validation successful -> ${user ? true : false}`);
        if (user) {
            req.user = {
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role
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