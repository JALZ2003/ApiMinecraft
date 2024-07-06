import Admin from "../../models/Admin.js";

export default async (req, res, next) => {
    try {
        await Admin.findByIdAndUpdate(req.admin._id, { active: false });
        return res.status(200).json({
            success: true,
            response: `ID -> ${req.admin._id}`,
            message: "Admin signout successfully!!"
        });
    } catch (error) {
        return next(error);
    }
}