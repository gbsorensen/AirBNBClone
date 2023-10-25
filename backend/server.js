require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const {
  createListing,
  getListings,
  getListing,
} = require("./controllers/listingController");

require("dotenv").config();

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  if (req.body) {
    console.log("Request body:");
    console.log(req.body);
  }
  next();
});

// Start the server..
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.get("/allListings", getListings);
app.get("/:id", getListing);
app.post("/MakeAListing", createListing);
