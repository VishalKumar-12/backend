// bookrequest.routes.js
const express = require('express');
const router = express.Router();
const {
  createBookRequest,
  getBookRequestsByEmail,
  getAllBookRequests
} = require('../controller/bookrequest.controller');

router.post('/', createBookRequest);
router.get('/email/:email', getBookRequestsByEmail);
router.get('/', getAllBookRequests);

module.exports = router;
