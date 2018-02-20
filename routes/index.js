var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.home);
/* GET login page. */
router.get('/login', ctrlMain.login);
/* POST login page. */
router.post('/login', ctrlMain.post_login);
/* GET signup page. */
router.get('/signup', ctrlMain.signup);


module.exports = router;
