// *********config Router

const express = require('express');
const { getSubHomepage, getSubFirstpage } = require('../controllers/subHomeController')
const router = express.Router();


router.get('/', getSubHomepage);
router.get('/', getSubFirstpage);


module.exports = router; //export default