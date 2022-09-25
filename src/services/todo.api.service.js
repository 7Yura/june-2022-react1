import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos', headers: {'Content-Type': 'application/json',}
});

const getTodoAxios = () => {
    return axiosInstance.get()
}
export {getTodoAxios};