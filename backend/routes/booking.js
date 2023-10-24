const express = require("express");
const {
  getBookings,
  getBooking,
  createBooking,
  deleteBooking,
  updateBooking,
} = require("../controllers/bookingController");

const router = express.Router();

// GET all Bookings
router.get("/", getBookings);

// GET a single Booking
router.get("/:id", getBooking);

// POST a new Booking
router.post("/", createBooking);

// DELETE a Booking
router.delete("/:id", deleteBooking);

// UPDATE a Booking
router.patch("/:id", updateBooking);

module.exports = router;
