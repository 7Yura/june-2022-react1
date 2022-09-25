import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
});

const getTodoAxios = () => {
    return axiosInstance.get()
}
export {getTodoAxios};