const express = require('express');
const router = express.Router();
const siteControllers = require('../app/comtrollers/SiteController');
// router.post('/search', siteControllers.formal);
router.get('/search', siteControllers.search);
router.get('/', siteControllers.index);

module.exports = router;
