import Admin from "../../models/Admin.js";

export default async (req, res, next) => {
    try {
        console.log(`[SYSTEM]: Idle status change -> In Process...`);
        await Admin.findByIdAndUpdate(req.user._id, { active: true });
        console.log(`[SYSTEM]: Successfully!!, Logged in...`);
        return res.status(200).json({
            success: true,
            response: {
                admin: req.user,
                token: req.token
            },
            message: "Admin signed is successfully!!"
        });
    } catch (error) {
        return next(error);
    }
}