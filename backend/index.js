const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

// Use CORS middleware
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// User routes
app.use("/user", userRouter);

// Root route
app.get("/", (req, res) => {
  res.send("hello");
});

// Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit process with failure
  }
};

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  await connect();
  console.log(`Server started on port ${PORT}`);
});
