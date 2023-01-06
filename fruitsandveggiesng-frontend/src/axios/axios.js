import axios from "axios";
const instance = axios.create({
    // baseURL: "http://localhost:5656"
    baseURL: "https://fruitsandveggies.herokuapp.com"
});
export default instance;
