class ValidationError extends Error {}

function handleError(err, req, res, next) {
    res
        .status(err instanceof ValidationError ? 400 : 500)
        .json({
            error: err instanceof ValidationError ? err.message : err.message,
        });
}

module.exports = {
    handleError,
    ValidationError,
}
