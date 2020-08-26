const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// @route         GET api/auth
// @description   Test route
// @access        Public
// by adding 'auth' as second param in get method we run the request through the auth middleware
router.get("/", auth, (req, res) => res.send("Auth route"));

module.exports = router;
