const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://my-client-ochre.vercel.app"],
    credentials: true,
  })
);

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

// Base route
app.get("/", (req, res) => {
  res.send("📚 Book Store Server is running!");
});

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}
connectDB();

// Error Handling Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the Server
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
