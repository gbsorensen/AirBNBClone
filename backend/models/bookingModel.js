const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    listing: {
      type: String,
      required: true,
    }, // !!!REMEMBER to reference this later with the listing model
    user: {
      type: String,
      required: true,
    }, // !!!REMEMBER to reference this later with the User model
    reviews: {
      trype: String,
    }, // make a reviews model??? and reference it to this one?
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
