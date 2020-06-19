const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const mongoose = require("mongoose");

// Import routes
const authRoute = require("./routes/auth");

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db!");
  }
);

// Middleware
app.use(express.json());

// Route Middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Server Up and running"));
