export default (req, res, next) => {
    req.admin = {
        _id: req.admin._id,
        name: req.admin.name,
        password: req.admin.password,
        role: req.admin.role 
    }
    return res.status(200).json({
        success: true,
        response: {
            admin: req.admin,
            token: req.token,
        },
        message: "Admin Sign in with token!!!"
    })
}