const express = require('express');
const router = express.Router();
const routes = require('./route');

router.use('/yatri/profile', routes);

module.exports = router;
