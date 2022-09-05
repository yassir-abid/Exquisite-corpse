const path = require('path');
const { cadex } = require('../services/cadex');

const controller = {
    home(request, response) {
        return response.status(200).sendFile(path.join(__dirname, '../../public/index.html'));
    },

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
