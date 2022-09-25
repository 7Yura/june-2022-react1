import React from 'react';

const Todo = (todo) => {
    return (
        <div>
            <h2>id: {todo.id}  </h2>
            <p>{todo.title} <br/> {todo.completed}</p>

            {/*<button onClick={() => {lift(user);}}>details</button>*/}
        </div>
    );
};

export default Todo;