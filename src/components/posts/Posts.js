import {Post} from "../post/Post";

const Posts = ({posts,getPostId}) => {

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post} getPostId={getPostId}/>)
            }
        </div>
    )
}
export {Posts};