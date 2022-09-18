import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/', headers: {'Content-Type': 'application/json',}
});

const getLaunchesAxios = () => {
    return axiosInstance.get()
}

export {getLaunchesAxios}