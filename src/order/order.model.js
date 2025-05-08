const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({  // ✅ Add "new mongoose.Schema"
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: String,
    state: String,
    zipcode: String,
  },
  phone: {
    type: Number,
    required: true,
  },
 productIds: [
  {
    type: Number,
    ref: 'Book',
    required: true,
  }
],
  totalPrice: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true  // ✅ Correct place for timestamps
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
