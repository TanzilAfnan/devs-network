const express = require("express");
const router = express.Router();

// @route GET api/posts
// @desc post route
// @access Public
router.get("/", (req, res, next) => {
  res.json({ mes: "Posts works" });
});

module.exports = router;
