// bookrequest.model.js
const mongoose = require('mongoose');

const bookRequestSchema = new mongoose.Schema({
  isbn :{type: String , required:true},
  title: { type: String, required: true },
  author: { type: String },
  quantity: {type: Number},
  email: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BookRequest', bookRequestSchema);
