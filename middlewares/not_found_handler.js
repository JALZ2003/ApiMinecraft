export default (req, res, next) => {
    console.log('Not found handler!!');
    return res.status(404).json({
        success: false,
        response: null,
        message: `${req.method} ${req.url} not found`
    });
}