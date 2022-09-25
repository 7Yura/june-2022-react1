import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <h2> {comment.id}  </h2>
            <p>{comment.title} </p>

        </div>
    );
};

export  {Comment};