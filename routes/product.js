const express = require('express');
const router = express.Router();
const{getAllproducts,getTestingproducts} = require('../controllers/product');
router.route('/').get(getAllproducts);
router.route('/testing').get(getTestingproducts);
module.exports =router;