//imports
import express from "express";
import mongoose from "mongoose";
import Messages from "./models/Messages.js";
import Pusher from "Pusher";

//configuration
const app = express();
const port = process.env.PORT || 9000;
const pusher = new Pusher({
	appId: "1538723",
	key: "534b82c071e3fe337bce",
	secret: "ab6ff0f9e18070f578ad",
	cluster: "ap2",
	useTLS: true,
});

//middleware
app.use(express.json());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");
	next();
});
//mongodb
mongoose.Promise = global.Promise;

const dbURI =
	"mongodb+srv://admin:mortyparty@whatsappcluster.abwpdsm.mongodb.net/test?retryWrites=true&w=majority";
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
			pusher.trigger("message", "inserted", {
				name: messageDetails.name,
				message: messageDetails.message,
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
