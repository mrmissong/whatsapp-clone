//imports
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
	dotenv.config();
}
import express from "express";
import mongoose from "mongoose";
import Messages from "./models/Messages.js";
import Pusher from "pusher";
import cors from "cors";
//configuration
const app = express();
const port = process.env.PORT || 9000;
const pusher = new Pusher({
	appId: process.env.appId,
	key: process.env.key,
	secret: process.env.secret,
	cluster: "ap2",
	useTLS: true,
});

//middleware
app.use(express.json());
app.use(cors());

//mongodb
mongoose.Promise = global.Promise;

const dbURI =
	"mongodb+srv://vscodemissong:mortyparty@mancode.ku2ubmu.mongodb.net/whatsapp-clone?retryWrites=true&w=majority";
mongoose.connect(dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.set("strictQuery", true);

const db = mongoose.connection;
db.once("open", () => {
	console.log("db connected");
	const msgCollection = db.collection("whatsappmessages");
	const changeStream = msgCollection.watch();
	changeStream.on("change", (change) => {
		console.log("A change occured", change);

		if (change.operationType === "insert") {
			const messageDetails = change.fullDocument;
			pusher.trigger("messages", "inserted", {
				name: messageDetails.name,
				message: messageDetails.message,
				received: messageDetails.received,
				timestamp: messageDetails.createdAt,
			});
		} else {
			console.log("error triggering Pusher");
		}
	});
});

//apis
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

//listen
app.listen(port, () => {
	console.log(`server running on localhost:${port}`);
});
