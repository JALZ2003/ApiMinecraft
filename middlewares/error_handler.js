export default (req, res, next) => {
    console.log("error handler");
    return res.status(500).json({
        success: false,
        response: null,
        messages: ["Error!!"]
    });
}