const Listing = require("../models/listingModel");
const mongoose = require("mongoose");

// get all Listings
const getListings = async (req, res) => {
  const listings = await Listing.find({}).sort({ createdAt: -1 });

  res.status(200).json(listings);
};

// create a new Listing

const createListing = async (req, res) => {
  const { name, description, images, price, location, amenities, host } =
    req.body;
  try {
    const listing = await Listing.create({
      name,
      description,
      images,
      price,
      location,
      amenities,
      host,
    });
    res.status(200).json(listing);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getListing = async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findById(id);
    res.status(200).json(listing);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createListing,
  getListings,
  getListing,
};
