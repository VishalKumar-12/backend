const express = require('express');
const {createAOrder,getOrderByEmail,getAllOrders} = require('./order.controller');

const router =  express.Router();

//create order
router.post("/", createAOrder);

// // get orders by user email 
router.get("/email/:email", getOrderByEmail);
router.get("/all", getAllOrders);


module.exports = router;