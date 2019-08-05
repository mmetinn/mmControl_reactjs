import config from "../config";
import Axios from "axios";

const url = (endpoint) => {
    return `${config.apiUrl}/${config.apiVersion}/${endpoint}`
}
const post = (endpoint, data = {}) => {
    return Axios.post(url(endpoint), data).then(res => res.data)

}

export {
    post
}