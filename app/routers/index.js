const { Router } = require('express');

const controller = require('../controllers/controller');
const validator = require('../middlewares/validator');
const schemaPost = require('../schemas/cadexPost');

const router = Router();

router.get('/cadex', controller.getCadex);
router.post('/cadex', validator(schemaPost, 'body'), controller.postCadex);

module.exports = router;
