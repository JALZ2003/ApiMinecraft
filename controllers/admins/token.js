export default (req, res, next) => {
    console.log("[SYSTEM]: Signing from Token ->", req.token);
    req.admin = {
        _id: req.admin._id,
        name: req.admin.name,
        password: req.admin.password,
        role: req.admin.role 
    }
    console.log(`[SYSTEM]: Adding to Admin in response -> ${req.admin}`);
    console.log("[SYSTEM]: Signin successful...");
    return res.status(200).json({
        success: true,
        response: {
            admin: req.admin,
            token: req.token,
        },
        message: "Admin Sign in with token!!!"
    })
}