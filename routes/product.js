/* This code snippet is setting up a router in a Node.js application using the Express framework.
Here's a breakdown of what each line is doing: */
const express = require('express');
/* `const express = require('express');` is importing the Express framework in the Node.js application.
It allows you to create an instance of the Express application to set up routes, handle HTTP
requests, and more. */
const router = express.Router();
const{getAllproducts,getTestingproducts} = require('../controllers/product');
router.route('/').get(getAllproducts);
router.route('/testing').get(getTestingproducts);
module.exports =router;