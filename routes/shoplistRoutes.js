var express = require('express');
var router = express.Router();
var shoplist = require('../controllers/shoplistController.js');

router.get('/', shoplist.list_all_shop);
router.post('/shopcreate', shoplist.creat_shop);

module.exports = router;
