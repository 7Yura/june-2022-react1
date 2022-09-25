import React from 'react';

const Todo = ({todo}) => {
    todo.completed = undefined;
    return (
        <div>
            <h2> id: {todo.id}  </h2>
            <p> title: {todo.title} <br/> {todo.completed}</p>

            {/*<button onClick={() => {lift(user);}}>details</button>*/}
        </div>
    );
};

export  {Todo};