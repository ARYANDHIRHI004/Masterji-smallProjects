import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://www.themealdb.com/api/json/v1/1"
})

export default axiosInstance