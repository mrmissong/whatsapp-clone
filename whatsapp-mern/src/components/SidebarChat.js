import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChat.css";
function SidebarChat({ name, message, source }) {
	return (
		<div className="sidebarChat">
			<Avatar src={source} />
			<div className="sidebarChat_info">
				<h2>{name}</h2>
				<p>{message}</p>
			</div>
		</div>
	);
}

export default SidebarChat;
