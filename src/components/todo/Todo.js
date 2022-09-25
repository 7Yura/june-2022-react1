import React from 'react';

const Todo = ({todo}) => {
    return (
        <div>
            <h2> {todo.id}  </h2>
            <p>{todo.title} <br/> {todo.completed}</p>

            {/*<button onClick={() => {lift(user);}}>details</button>*/}
        </div>
    );
};

export  {Todo};