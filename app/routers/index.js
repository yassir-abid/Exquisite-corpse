const { Router } = require('express');

const controller = require('../controllers/controller');
const validator = require('../middlewares/validator');
const schemaPost = require('../schemas/cadexPost');
const handleError = require('../middlewares/handleError');

const router = Router();

router.get('/', controller.home);
router.get('/cadex', controller.getCadex);
router.post('/cadex', validator(schemaPost, 'body'), controller.postCadex);

router.use(() => {
    const error = new Error('Endpoint not found');
    error.status = 404;
    throw error;
});

router.use(handleError);

module.exports = router;
