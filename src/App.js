// Отримати всіх користувачів з jsonplaceholder, вивести їх.
// Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси


import './App.css';
import {Posts, Users} from "./components";
import {postService} from "./services";
import {useState} from "react";
import {Comments} from "./components/comments/Comments";
import {commentService} from "./services/comment.service";

function App() {
    const [posts,setPosts] = useState([]);
    const getUserId = (userId) => {
        postService.getPosts(userId).then(({data}) => setPosts(data))
    }
    const [comments,setComments] = useState([]);
    const getPostId = (postId) =>{
        commentService.getComments(postId).then(({data}) => setComments(data))
    }
    return (<div>
        <Users  getUserId={getUserId}/>
        <Posts posts={posts} getPostId={getPostId}/>
        <Comments comments={comments}/>
    </div>);
}

export default App;