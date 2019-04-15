const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.loginController);

router.post('/register', userController.registerController);

router.get('/', userController.getAllUser);


module.exports = router;