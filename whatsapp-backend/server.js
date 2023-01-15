import express from "express";
import mongoose from "mongoose";
import Messages from "./models/Messages.js";
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
const dbURI =
	"mongodb+srv://admin:mortyparty@whatsappcluster.abwpdsm.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.set("strictQuery", true);

app.get("/", (req, res) => {
	res.status(200).send("welcome");
});

app.get("/messages/sync", (req, res) => {
	Messages.find((error, data) => {
		if (error) {
			res.status(500).send(error);
		} else {
			res.status(200).send(data);
		}
	});
});
app.post("/messages/new", (req, res) => {
	const dbMessage = req.body;
	Messages.create(dbMessage, (error, data) => {
		if (error) {
			res.status(500).send(error);
		} else {
			res.status(201).send(data);
		}
	});
});
app.listen(port, () => {
	console.log(`server running on localhost:${port}`);
});
