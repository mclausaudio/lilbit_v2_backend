const mongoose = require("mongoose");

const Redirect = require("./redirect");

mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/lilbit_v2", { useNewUrlParser: true });

module.exports = {
	Redirect
};
