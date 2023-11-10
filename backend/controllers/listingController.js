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

  if (!name) {
    return res.status(400).json({ error: "Listing name is required" });
  }
  if (!description) {
    return res.status(400).json({ error: "Listing descriotion is required" });
  }
  if (!images) {
    return res.status(400).json({ error: "Listing images is required" });
  }
  if (!price) {
    return res.status(400).json({ error: "Listing price is required" });
  }
  if (!location) {
    return res.status(400).json({ error: "Listing location is required" });
  }
  if (!amenities) {
    return res.status(400).json({ error: "Listing amenities is required" });
  }
  if (!host) {
    return res.status(400).json({ error: "Listing host is required" });
  }
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

    await listing.save();
    res.status(200).json({ listing });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// will get one specific  listing
const getListing = async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findById(id);
    res.status(200).json(listing);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateListing = async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json(listing);
  } catch (error) {
    res
      .status(404)
      .json({ error: "Listing does not exist/invalid ID/invalid update" });
  }
};

const deleteListing = async (req, res) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findByIdAndDelete(id);
    res.json({
      status: "Successful",
      message: "Listing deleted",
      listing,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createListing,
  getListings,
  getListing,
  deleteListing,
  updateListing,
};
