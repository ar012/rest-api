const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const authenticate = require('../middleware/authenticate');



// Get
router.get('/', contactController.getAllContactController);


//Post
router.post('/', authenticate, contactController.postNewContactController);


router.get('/:id', contactController.getSingleContact);


// PUT
router.put('/:id', authenticate, contactController.edditContact);


// DELETE
router.delete('/:id', authenticate, contactController.deleteContact);


module.exports = router;