export default (req, res, next) => {
    console.log(`[SYSTEM]: Requested Method: ${req.method}`);
    return next()
}