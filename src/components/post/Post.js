const Post = ({getPostId,post}) => {

    return (
        <div>
            <h2>{post.id} -- {post.title}</h2>
            <button onClick={() => getPostId(post.id)}>Click comment</button>
        </div>
    )
}
export  {Post};