require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bookingRoutes = require("./routes/booking");

const app = express();

// initial app router to test api
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the Booking app" });
// });

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/bookings", bookingRoutes);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening to port 4000 and connected to db");
    });
  })
  .catch((error) => {
    console.log(error);
  });

// listening to requests
