/* eslint-disable no-unused-vars */
const path = require('path');

const handleError = (error, _, response, next) => {
    console.log(error);

    if (error.status === 404) {
        return response.status(500).json(error.message);
    }

    return response.status(500).json('Une erreur est survenue! Désolé');
};

module.exports = handleError;
