const router = require("express").Router({ mergeParams: true });

const {
	getAllRedirects,
	createNewRedirect,
	findOneRedirect,
	findOneRedirectAndUpdate,
	findOneRedirectAndDelete
} = require("../handlers/redirects");

//  / photos/     GET /	index - DONE
// 	/ photos/new  GET	new - NOT NEEDED, USING REACT
// 	/ photos/     POST	create - DONE
// 	/ photos/id	  GET	show - DONE
//  / photos/id/edit	GET	edit - CURRENT
// 	/ photos/id	  PATCH / PUT	update
//	/ photos/id	  DELETE	destroy

// /api/redirects/
router
	.route("/")
	.get(getAllRedirects)
	.post(createNewRedirect);
// /api/redirects/:shortId
router
	.route("/:shortId")
	.get(findOneRedirect)
	.put(findOneRedirectAndUpdate)
	.delete(findOneRedirectAndDelete);

module.exports = router;
