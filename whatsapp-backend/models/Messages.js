import mongoose from "mongoose";

const wappSchema = mongoose.Schema(
	{
		message: {
			type: String,
			required: false,
		},
		name: {
			type: String,
			required: true,
		},
		received: {
			type: Boolean,
			required: true,
		},
	},
	{ timestamps: true }
);

const Messages = mongoose.model("whatsappMessages", wappSchema);
export default Messages;
