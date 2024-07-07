import bcryptjs from "bcryptjs";

export default (req, res, next) => {
    console.log(`[SYSTEM]: Validating Passwords...`);
    if (bcryptjs.compareSync(req.body.password, req.admin.password)) {
        console.log(`[SYSTEM]: Validation successful...`);
        delete req.admin.password;
        return next();
    }
    console.log(`[SYSTEM]: Error validating password -> Invalid Credential!!!`);
    return res.status(400).json({
        success: false,
        response: null,
        messages: ["Invalid Credentials!!"]
    });
}