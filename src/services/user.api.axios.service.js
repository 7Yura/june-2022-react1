import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/', headers: {'Content-Type': 'application/json',}
});

const getLaunchesAxios = () => {
    return axiosInstance.get()
}
//
// const getUserAxios = (id) => {
//     return axiosInstance.get('/' + id)
// }
//
//
// //https://jsonplaceholder.typicode.com/users/1/posts
// const getUserPosts = (id) => {
//     return axiosInstance.get('/'+id)

// }

export {getLaunchesAxios}