const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

require("dotenv").config();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      'https://my-client-ochre.vercel.app'
    ],
    credentials: true
  })
);

app.options("*", cors());
// Routes
const bookRoutes = require("./src/books/bookRoutes");
const orderRoutes = require("./src/order/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");
const bookRequestRoutes = require("./src/bookrequest/routes/bookrequest.route");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/bookrequests", bookRequestRoutes);

// ✅ Base route
app.get("/", (req, res) => {
  res.send("📚 Book Store Server is running!");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
