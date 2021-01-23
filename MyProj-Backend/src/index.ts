import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connect, Kitten } from "./database/database";

dotenv.config();
const app = express();
const corsOptions = {
	origin: "*",
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
	Kitten.find({}, (err, cats) => {
		console.log(cats);
		if (!err) {
			res.send(cats);
		} else {
			throw err;
		}
	});
});

app.get("/add/:name", (req, res) => {
	const silence = new Kitten({ name: req.params.name });
	silence.save();
	res.send(silence);
});

app.get("/cleanup", (req, res) => {
	Kitten.deleteMany({}, (err) => {
		if (err) console.error(err);
	});
	res.send("Done");
});

const APP_PORT = process.env.SERVER_PORT || 8080;
const APP_HOST = process.env.SERVER_HOST || "127.0.0.1";
// start the Express server
app.listen(Number(APP_PORT), APP_HOST, () => {
	connect();
	console.log(`server started at http://${APP_HOST}:${APP_PORT}`);
});
