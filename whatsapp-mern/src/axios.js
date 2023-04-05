import axios from "axios";

const instance = axios.create({
	baseURL: "https://whatsapp-clone-backend-neln.onrender.com",
});

export default instance;
