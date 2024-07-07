export default (schema) => [
    (req, res, next) => {
        console.log("[SYSTEM]: Validate Schema...");
        const validation = schema.validate(req.body, { abortEarly: false });
        console.log(`[SYSTEM]: Validation -> ${validation.error ? true : false}`);
        if (validation.error) {
            return res.status(400).json({
                success: false,
                response: null,
                messages: validation.error.details.map(error => error.message)
            });
        }
        console.log(`[SYSTEM]: Next...`);
        return next();
    }
];