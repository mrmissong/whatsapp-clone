import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./Chat.css";
import MoreVert from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
function Chat() {
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
				<p className="chat_message">
					<span className="chat_name">Dog</span>
					this is a message
					<span className="chat_timestamp">{new Date().toUTCString()}</span>
				</p>
				<p className="chat_message">
					<span className="chat_name">Dog</span>
					this is a message
					<span className="chat_timestamp">{new Date().toUTCString()}</span>
				</p>
				<p className="chat_message chat_receiver">
					<span className="chat_name">Naba</span>
					this is a message
					<span className="chat_timestamp">{new Date().toUTCString()}</span>
				</p>
				<p className="chat_message">
					<span className="chat_name">Dog</span>
					this is a message
					<span className="chat_timestamp">{new Date().toUTCString()}</span>
				</p>
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
					<input type="text" placeholder="Type a message"></input>
					<button type="submit">send</button>
				</form>
				<IconButton>
					<MicIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Chat;
