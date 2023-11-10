const express = require("express");
const router = express.Router();
const {
  createListing,
  getListings,
  getListing,
  deleteListing,
  updateListing,
} = require("../controllers/listingController");

router.post("/", createListing);
router.get("/", getListings);
router.get("/:id", getListing);
router.delete("/:id", deleteListing);
router.patch("/:id", updateListing);

module.exports = router;
