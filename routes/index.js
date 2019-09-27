const express = require("express");
router = express.Router({ mergeParams: true });

const redirectRoutes = require("./redirects.js");
const appRoutes = require("./appRoutes.js");

const db = require("../models/");

// CRUD API routes
router.use("/api/redirects", redirectRoutes);

// APP redirecting routes
router.use("/:shortId", appRoutes);

module.exports = router;
