import axios from "axios";
import { getUser } from "../helpers/persistance-storage";

axios.defaults.baseURL = 'https://api.realworld.io/api'

axios.interceptors.request.use(config => {
    // console.log(config);
    const token = getUser('token')
    console.log(token);
    const authorization = token ? `Token ${token}` : ''
    config.headers.Authorization = authorization
    return config
})

export default axios