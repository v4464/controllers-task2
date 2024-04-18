const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);
router.get('/contactus', productsController.getContactUs);
router.post('/contactus', productsController.postContactUs);
router.get('/success', productsController.getSuccess);

module.exports = router;
