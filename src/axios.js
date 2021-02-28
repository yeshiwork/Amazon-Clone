import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/clone2-5e581/us-central1/api",
});

export default instance;
