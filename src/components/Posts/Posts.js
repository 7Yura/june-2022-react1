
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postService} from "../../services";
import {Post} from "../Post/Post";
import {postActions} from "../../redux";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.postReducer);

    useEffect(() => {
        postService.getAll().then(({data})=>dispatch(postActions.getAll(data)))
        dispatch(postActions.getAll())
    }, [])

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};