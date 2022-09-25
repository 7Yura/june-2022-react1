import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: ' https://jsonplaceholder.typicode.com/comments'
});

const getCommentsAxios = () => {
    return axiosInstance.get()
}
export {getCommentsAxios};