const Booking = require("../models/bookingModel");
const mongoose = require("mongoose");

// get all Bookings
const getBookings = async (req, res) => {
  const bookings = await Booking.find({}).sort({ createdAt: -1 });

  res.status(200).json(bookings);
};

// get a single Booking
const getBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such booking" });
  }

  const booking = await Booking.findById(id);

  if (!booking) {
    return res.status(404).json({ error: "No such Booking" });
  }

  res.status(200).json(booking);
};

// create a new Booking
const createBooking = async (req, res) => {
  const { place, user, checkIn, checkOut, name, phone, price } = req.body;
  try {
    const booking = await Booking.create({
      place,
      user,
      checkIn,
      checkOut,
      name,
      phone,
      price,
    });
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // add to the database
  try {
    const booking = await Booking.create({ title, load, reps });
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a Booking
const deleteBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such Booking" });
  }

  const booking = await Booking.findOneAndDelete({ _id: id });

  if (!booking) {
    return res.status(400).json({ error: "No such Booking" });
  }

  res.status(200).json(booking);
};

// update a Booking
const updateBooking = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such Booking" });
  }

  const booking = await Booking.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!booking) {
    return res.status(400).json({ error: "No such Booking" });
  }

  res.status(200).json(booking);
};

module.exports = {
  getBookings,
  getBooking,
  createBooking,
  deleteBooking,
  updateBooking,
};
