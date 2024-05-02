import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-fa01d/us-central1/api", //the api url  (cloud function url)
});

export default instance;
