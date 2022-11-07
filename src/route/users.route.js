const express = require('express')
const router = express.Router()
const controller =   require('../controller/item.controller');

// Retrieve all items
router.get('/', controller.findAll);

// Retrieve filtered user
router.get('/filter/', controller.findByUser);

// Save new user
router.post('/', controller.create);

// Update user
router.put('/', controller.update);

// Delete user with username
router.delete('/delete/', controller.delete);

module.exports = router