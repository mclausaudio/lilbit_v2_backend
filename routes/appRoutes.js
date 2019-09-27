const router = require("express").Router({ mergeParams: true });

const { redirectFromShortId } = require("../handlers/appRedirecting");

// short ID
router.route("/").get(redirectFromShortId);

module.exports = router;
