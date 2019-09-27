const mongoose = require("mongoose");

const RedirectSchema = new mongoose.Schema(
	{
		originalUrl: {
			type: String,
			required: true
		},
		shortId: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const Redirect = mongoose.model("Redirect", RedirectSchema);

module.exports = Redirect;
