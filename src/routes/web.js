// *********config Router
const express = require('express');
const { getHomepage, getFirstpage } = require('../controllers/homeController') //inport
const router = express.Router();


router.get('/', getHomepage)
router.get('/first-page', getFirstpage)


module.exports = router; //export default