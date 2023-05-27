const express = require('express');
const router = express.Router();
const {login, restrictedView} = require('../controllers/auth.controller');
const {isAuth} = require('../middlewares/isAuth.handler');

router.post('/login', login);
router.get('/restricted', isAuth, restrictedView);

module.exports = router;