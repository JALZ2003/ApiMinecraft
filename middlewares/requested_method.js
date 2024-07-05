export default (req, res, next) => {
    console.log(`[ROUTER]: Requested Method: ${req.method}`);
    return next()
}