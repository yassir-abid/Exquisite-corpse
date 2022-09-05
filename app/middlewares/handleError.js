/* eslint-disable no-unused-vars */
const path = require('path');

const handleError = (error, _, response, next) => {
    console.log(error);

    if (error.status === 404) {
        return response.status(404).sendFile(path.join(__dirname, '../.././public/page404.html'));
    }

    return response.status(500).json('Une erreur est survenue! Désolé');
};

module.exports = handleError;
