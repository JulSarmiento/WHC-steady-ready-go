const express = require('express');
const router = express.Router();
const {login, restrictedView, signIn} = require('../controllers/auth.controller');
const {isAuth} = require('../middlewares/isAuth.handler');
const authController = require('../controllers/auth.controller');

// router.post('/login', login);
router.get('/restricted', isAuth, restrictedView);

router.post('/login', authController.signIn);

module.exports = router;