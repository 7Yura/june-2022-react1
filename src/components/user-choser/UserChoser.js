import {useEffect, useState} from "react";
import {getUserAxios, getUserPosts} from "../../services/user.api.axios.service";

export default function UserChoser() {


    let [user, setUser] = useState(null);
    let [post, setPost] = useState(null);
    let [id, setId] = useState(1);


    const increment = () => {
        id++;
        setId(id);
    }

    const decrement = () => {
        id--;
        setId(id);
    }

    useEffect(() => {
        console.log('effect');
        getUserAxios(id).then(({data}) => {
            setUser(data);
        })
        getUserPosts(id).then(({data}) => {
            setPost(data);
        })
    }, [id]);


    return (<div>

        <div>{JSON.stringify(user)}</div>
        {/*<div>{JSON.stringify(post)}</div>*/}
        <button onClick={() => {
            decrement(id)
        }}>prev
        </button>
        <button onClick={() => {
            increment(id);
        }}>next
        </button>

    </div>);
}