const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');



// Get
router.get('/', contactController.getAllContactController);


//Post
router.post('/', contactController.postNewContactController);


router.get('/:id', contactController.getSingleContact);


// PUT
router.put('/:id', contactController.edditContact);


// DELETE
router.delete('/:id', contactController.deleteContact);


module.exports = router;