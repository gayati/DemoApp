const express = require('express');
const router = express.Router();

const ctrlUser = require('../controller/userController.js');

router.post('/register', ctrlUser.register);

module.exports = router;