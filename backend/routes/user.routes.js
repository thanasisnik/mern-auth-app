const express = require('express');
const router = express();

const userController = require('../controllers/user.controller');


router.post('/register', userController.create);

module.exports = router;