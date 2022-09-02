const validator = (schema, dataOrigin) => {
    const myMw = (request, response, next) => {
        const { error } = schema.validate(request[dataOrigin]);
        if (error) {
            return response.status(400).json(error.message);
        }
        return next();
    };
    return myMw;
};

module.exports = validator;
