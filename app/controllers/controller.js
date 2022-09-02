const { cadex } = require('../services/cadex');

const controller = {
    getCadex(request, response) {
        const cadexObject = cadex.generate();
        const copy = { ...cadexObject, ...request.query };
        return response.json(copy.glue());
    },

    postCadex(request, response) {
        const cadexObject = cadex.generate();
        cadex.add(request.body);
        const copy = { ...cadexObject, ...request.body };
        return response.json(copy.glue());
    },
};

module.exports = controller;
