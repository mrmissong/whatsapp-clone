import axios from "axios";

const instance = axios.create({
	basicURL: "http://localhost:9000",
});

export default instance;
