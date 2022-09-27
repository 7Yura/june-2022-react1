import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    let navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {
                // /posts/:id
                navigate(comment.id.toString());
            }}>{comment.name}</button>
            {/*<h2>id: {comment.id}  </h2>*/}
            {/*<p>name:  {comment.name} <br/> body:  {comment.body}</p>*/}

        </div>
    );
};

export  {Comment};