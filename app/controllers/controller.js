const { cadex } = require('../services/cadex');

const controller = {
    getCadex(request, response) {
        const cadexObject = cadex.generate();
        const copy = { ...cadexObject, ...request.query };
        return response.json(copy.glue());
    },
};

module.exports = controller;
