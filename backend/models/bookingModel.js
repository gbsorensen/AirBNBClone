const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    place: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    checkIn: {
      type: Date,
      required: true,
    },
    checkOut: {
      type: Date,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    price: Number,
  },
  { timestamps: true }
);

const BookingModel = mongoose.model("Booking", bookingSchema);

module.exports = BookingModel;
