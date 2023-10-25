const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [String], // note: search for image uploader API
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    }, // add geolocator??
    amenities: [String], // this is the parking, hot water, wifi etc
    host: {
      type: String,
      required: true,
    }, // Reference to the User model
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
