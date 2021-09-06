const express = require('express');
const authController = require('../controllers/auth');
const userController = require('../controllers/user');

const router = express.Router();

router.use(authController.validateToken);

router.get('/users', userController.getAll);
router.get('/user/:id', userController.get);
router.post('/user', userController.insert);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

module.exports = router;