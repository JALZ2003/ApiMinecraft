import Admin from "../../models/Admin.js";

export default async (req, res, next) => {
    try {
        console.log("[SYSTEM]: Signout Admin in Process...");
        console.log(req.user._id);
        await Admin.findByIdAndUpdate(req.user._id, { active: false });
        console.log("[SYSTEM]: Signed out Successfully...");
        return res.status(200).json({
            success: true,
            response: `ID -> ${req.user._id}`,
            message: "Admin signout successfully!!"
        });
    } catch (error) {
        return next(error);
    }
}