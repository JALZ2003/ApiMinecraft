export default (req, res, next) => {
    console.log("[SYSTEM]: Signing from Token ->", req.token);
    req.user = {
        _id: req.user._id,
        name: req.user.name,
        password: req.user.password,
        role: req.user.role 
    }
    console.log(`[SYSTEM]: Adding to Admin in response -> ${req.user}`);
    console.log("[SYSTEM]: Signin successful...");
    return res.status(200).json({
        success: true,
        response: {
            admin: req.user,
            token: req.token,
        },
        message: "Admin Sign in with token!!!"
    })
}