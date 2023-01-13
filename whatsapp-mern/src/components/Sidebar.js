import React from "react";
import "./Sidebar.css";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";

function Sidebar() {
	return (
		<div className="sidebar">
			Sidebar
			<div className="sidebar_header">
				<Avatar src="https://i.imgur.com/ONxzjfl.jpg" />
				<div className="sidebar_hederRight">
					<IconButton>
						<GroupsIcon />
					</IconButton>
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="sidebar_search">
				<div></div>
			</div>
		</div>
	);
}

export default Sidebar;
