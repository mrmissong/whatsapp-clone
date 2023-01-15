import React from "react";
import "./Sidebar.css";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import SidebarChat from "./SidebarChat";
import FilterListIcon from "@mui/icons-material/FilterList";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<IconButton>
					<Avatar src="https://i.imgur.com/ONxzjfl.jpg" />
				</IconButton>
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
				<div className="sidebar_searchContainer">
					<IconButton>
						<SearchOutlined />
					</IconButton>

					<input placeholder="search or start new chat" type="text"></input>
					<IconButton>
						<FilterListIcon />
					</IconButton>
				</div>
			</div>
			<div className="sidebar_chats">
				<SidebarChat
					source="https://i.imgur.com/MIq6NpV.jpg"
					name="Ben"
					message="  how was the show?"
				/>
				<SidebarChat
					source="https://i.imgur.com/DAzFa15.jpg"
					name="John"
					message="  Ok. I sent it"
				/>
				<SidebarChat
					source="https://i.imgur.com/2iNGklj.jpg"
					name="Lois"
					message="  Thanks!"
				/>
			</div>
		</div>
	);
}

export default Sidebar;
