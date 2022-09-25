import React, {useEffect, useState} from "@types/react";

import {getCommentsAxios} from "../../services/comment.api.service";
import {Comment} from "../comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    // useEffect(() => {
    //
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(value => value.json())
    //     .then(value => {
    //         setTodos(value);
    //         console.log(value);
    //     });
    // }, []);
    useEffect(() => {

        getCommentsAxios().then(value => {
            setComments(value.data);
            console.log(value);
        });

    }, []);
    return (
        <div>
            {comments.map((comment,index) => (<Comment key={index} comment={comment}/>))}
        </div>
    );
};

export {Comments};