import Admin from "../../models/Admin.js";

export default async (req, res, next) => {
    try {
        await Admin.findByIdAndUpdate(req.admin._id, { active: true });
        return res.status(200).json({
            success: true,
            response: {
                admin: req.admin,
                token: req.token
            },
            message: "Admin signed is successfully!!"
        });
    } catch (error) {
        return next(error);
    }
}