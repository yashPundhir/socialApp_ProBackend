const express = require("express");

const format = require("date-format");

const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
	res.status(200).send("<h1>Hello everyone</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
	let searchUrl = req.originalUrl;
	// const date = new Date();
	res.status(200).json({
		username: "yash.pundhir.prof",
		followers: 58,
		follows: 69,
		// date: date.toDateString(),
		// time: date.toTimeString().slice(0, 8),
		date: format.asString("dd-MM-yyyy hh:mm:ss", new Date()),
		url: searchUrl,
	});
});

app.get("/api/v1/facebook", (req, res) => {
	let searchUrl = req.originalUrl;
	// const date = new Date();
	res.status(200).json({
		username: "Yash Pundhir",
		followers: 100,
		follows: 300,
		// date: date.toDateString(),
		// time: date.toTimeString().slice(0, 8),
		date: format.asString("dd/MM/yyyy hh:mm:ss", new Date()),
		url: searchUrl,
	});
});

app.get("/api/v1/linkedin", (req, res) => {
	let searchUrl = req.originalUrl;
	// const date = new Date();
	res.status(200).json({
		username: "Yash Pundhir",
		followers: 10,
		follows: 60,
		// date: date.toDateString(),
		// time: date.toTimeString().slice(0, 8),
		//date: format.asString("dd-MM-yyyy hh:mm:ss", new Date()),
		date: format.asString(format.DATETIME_FORMAT, new Date()),
		url: searchUrl,
	});
});

app.get("/api/v1/:url", (req, res) => {
	res.status(200).json({
		reqUrl: req.params.url,
	});
});

app.listen(PORT, () => {
	console.log(`server is running at port ${PORT}`);
});
