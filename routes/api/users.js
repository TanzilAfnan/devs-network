const express = require("express");
const router = express.Router();

// @route GET api/users
// @desc users route
// @access Public
router.get("/", (req, res, next) => {
  res.json({ mes: "users works" });
});

module.exports = router;
