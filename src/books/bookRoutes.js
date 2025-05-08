const Book = require('./book.model');
const express = require("express");
const router = express.Router();
const { getSingleBook, getAllBooks, postABook,updateBook,deleteABook } = require("./book.controller"); // Import the controller function
const verifyAdminToken =require('../middleware/verifyAdminToken');
// POST request to create a book
router.post("/create-book", verifyAdminToken, postABook);

// 🔹 Get a single book by ID (this should be above the "/")
router.get("/:id", getSingleBook);

// 🔹 Get all books
router.get("/", getAllBooks);

// update a book endpoint
router.put("/edit/:id",verifyAdminToken, updateBook);

router.delete("/:id",verifyAdminToken, deleteABook)

module.exports = router;




// how to works website
/*   frontend=> backend => controller => bookSchema => database=>
    send to server=> back to server*/ 