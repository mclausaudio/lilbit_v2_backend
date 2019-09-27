const express = require("express"),
	app = express(),
	bodyParser = require("body-parser");

const routes = require("./routes");

const PORT = process.env.PORT || 3000;

//config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routing
app.use("/", routes);

app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});
