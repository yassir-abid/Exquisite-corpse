const { cadex } = require('../services/cadex');

const controller = {
    getCadex(request, response) {
        const cadexObject = cadex.generate();
        response.json(cadexObject.glue());
    },
};

module.exports = controller;
