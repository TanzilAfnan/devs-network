const express = require("express");
const router = express.Router();

// @route   GET api/profile
// @desc    profile route
// @access  Public
router.get("/", (req, res, next) => {
  res.json({ mes: "Profile works" });
});

module.exports = router;
