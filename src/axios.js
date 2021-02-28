import axios from "axios";
const instance = axios.create({
	baseURL: "https://us-central1-clone2-5e581.cloudfunctions.net/api",
});

export default instance;
