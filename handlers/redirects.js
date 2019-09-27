const db = require("../models");

const shortid = require("shortid");

const { httpVerify } = require("../helpers/urlValidation");
//INDEX
exports.getAllRedirects = async (req, res, next) => {
	try {
		let allRedirects = await db.Redirect.find({});
		return res.json(allRedirects);
	} catch (e) {
		return res.send(e);
	}
};
// POST
exports.createNewRedirect = async (req, res, next) => {
	console.log(req.body);
	try {
		let id = shortid.generate();
		//check to see if https:// or http:// was included. make sure they save properly
		//don't forget to add option in front end form as well.
		httpVerify(req.body.originalUrl, next);

		let redirect = await db.Redirect.create({
			originalUrl: req.body.originalUrl,
			shortId: id
		});
		return res.status(200).json(redirect);
	} catch (e) {
		return res.status(500).json(e);
	}
};
// SHOW
exports.findOneRedirect = async (req, res, next) => {
	console.log("find one");
	console.log(req.params);
	try {
		let found = await db.Redirect.find({ shortId: req.params.shortId });
		console.log(found);
		return res.status(200).json(found);
	} catch (e) {
		return res.status(500).json(e);
	}
};
//UPDATE
exports.findOneRedirectAndUpdate = async (req, res, next) => {
	try {
		let found = await db.Redirect.findOne({ shortId: req.params.shortId });
		console.log("found", found);
		console.log("req.params.newUrl", req.params.newUrl);
		console.log("req.body", req.body);
		found.originalUrl = req.body.newUrl;
		await found.save();
		console.log(found);
		return res.status(200).json(found);
	} catch (e) {
		return res.status(500).json(e);
	}
};
// DELETE
exports.findOneRedirectAndDelete = async (req, res, next) => {
	try {
		await db.Redirect.findOneAndDelete({ shortId: req.params.shortId });
		return res.status(200).json({ success: true });
	} catch (e) {
		return res.status(500).json(e);
	}
};
