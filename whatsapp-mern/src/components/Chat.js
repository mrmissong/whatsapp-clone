import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import "./Chat.css";
import MoreVert from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import axios from "../axios";

function Chat({ messages }) {
	const [input, setInput] = useState("");
	const sendMessage = async (e) => {
		e.preventDefault();

		await axios.post("/messages/new", {
			message: input,
			name: "Pablo",
			// timeStamp: "sometime",
			received: false,
		});
		setInput(" ");
	};
	return (
		<div className="chat">
			<div className="chat_header">
				<Avatar />
				<div className="chat_headerInfo">
					<h3>Room name</h3>
					{/* <p>last seen </p> */}
				</div>
				<div className="chat_headerRight">
					<IconButton>
						<SearchIcon />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className="chat_body">
				{messages.map((m) => {
					return (
						<p className={`chat_message ${m.received && "chat_receiver"}`}>
							<span className="chat_name">{m.name}</span>
							{m.message}
							<span className="chat_timestamp">{new Date().toUTCString()}</span>
						</p>
					);
				})}
				<p className="chat_message chat_receiver">
					<span className="chat_name">Naba</span>
					this is a message
					<span className="chat_timestamp">{new Date().toUTCString()}</span>
				</p>
			</div>
			<div className="chat_footer">
				<IconButton>
					<InsertEmoticonIcon />
				</IconButton>
				<IconButton>
					<AttachFileIcon />
				</IconButton>
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Type a message"
						type="text"
					/>
					<button onClick={sendMessage} type="submit">
						send
					</button>
				</form>
				<IconButton>
					<MicIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Chat;
