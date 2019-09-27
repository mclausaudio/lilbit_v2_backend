const db = require("../models");

const { httpVerify } = require("../helpers/urlValidation");

exports.redirectFromShortId = async (req, res, next) => {
	console.log("hello");
	try {
		let found = await db.Redirect.findOne({ shortId: req.params.shortId });
		//the original URL should already start with http or https (we did this during creation step), but test just in case
		console.log("before test");
		httpVerify(found.originalUrl, next);
		console.log("after test");
		return res.status(301).redirect(found.originalUrl);
	} catch (e) {
		return res.status(500).json(e);
	}
};
