import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "./axios";
function App() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		axios.get("/messages/sync").then((response) => {
			setMessages(response.data);
		});
	}, []);

	useEffect(() => {
		const pusher = new Pusher("534b82c071e3fe337bce", {
			cluster: "ap2",
		});

		const channel = pusher.subscribe("messages");
		channel.bind("inserted", (newMessages) => {
			// alert(JSON.stringify(newMessages));
			setMessages([...messages, newMessages]);
		});

		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages]);
	console.log(messages);

	return (
		<div className="app">
			<div className="app_body">
				<Sidebar />
				<Chat messages={messages} />
			</div>
		</div>
	);
}

export default App;
