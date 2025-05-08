// bookrequest.controller.js
const BookRequest = require('./bookrequest.model');

// Create a new book request
const createBookRequest = async (req, res) => {
  try {
    const newRequest = new BookRequest(req.body);
    const savedRequest = await newRequest.save();
    res.status(200).json(savedRequest);
  } catch (error) {
    console.error("Error creating book request", error);
    res.status(500).json({ message: "Failed to create book request" });
  }
};

// Get all requests by user email
const getBookRequestsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const requests = await BookRequest.find({ email }).sort({ createdAt: -1 });
    if (!requests.length) {
      return res.status(404).json({ message: "No book requests found" });
    }
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching book requests", error);
    res.status(500).json({ message: "Failed to fetch book requests" });
  }
};

// Get all book requests
const getAllBookRequests = async (req, res) => {
  try {
    const requests = await BookRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching all book requests", error);
    res.status(500).json({ message: "Failed to fetch all book requests" });
  }
};

module.exports = {
  createBookRequest,
  getBookRequestsByEmail,
  getAllBookRequests
};
