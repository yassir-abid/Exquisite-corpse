/* eslint-disable no-unused-vars */
const path = require('path');
const logger = require('../helpers/logger');

const handleError = (error, _, response, next) => {
    if (!error.status || error.status !== 404) {
        logger.error(error);
    } else {
        console.log(error);
    }

    if (error.status === 404) {
        return response.status(404).sendFile(path.join(__dirname, '../.././public/page404.html'));
    }

    return response.status(500).json('Une erreur est survenue! Désolé');
};

module.exports = handleError;
