import axios from "axios";
const instance = axios.create({
    // baseURL: "http://localhost:5656"
    baseURL: "https://rich-blue-nightingale-sock.cyclic.app/"
});
export default instance;
