/*

HELPERS TO TEST URL STRINGS

*/

//tests to make sure string starts with either http or https
exports.httpVerify = (url, next) => {
	console.log("verify");
	if (url.slice(0, 4) !== "http" && url.slice(0, 5) !== "https") {
		throw { message: "URL must start with https or http" };
	} else {
		console.log("inside else");
		next();
	}
};
