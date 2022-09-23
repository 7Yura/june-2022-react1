import {axiosService} from "./axios.service";
import {urls} from "../config";

const commentService = {
    getComments: (postId) => axiosService.get(`${urls.comments}/?postId=${postId}`)
}
export {commentService}