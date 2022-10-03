const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

/* GET homepage */
router.get('/', controller.travelList);
router.get('/:tripCode', controller.travelDetail);

module.exports = router;