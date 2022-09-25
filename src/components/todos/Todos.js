import React, { useEffect,useState} from 'react';

import Todo from "../todo/Todo";
// import {getTodoAxios} from "../../services/todo.api.service";


const Todos = () => {

    const [todos, setTodos] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(value => value.json())
        .then(value => {
            setTodos(value);
        });
    }, []);
    // useEffect(() => {
    //
    //     getTodoAxios().then(({value}) =>
    //         setTodos(value.data))
    //     console.log(todos.data);
    // }, []);
    return (
        <div>
            {todos.map((todo,index) => (<Todo key={index} todo={todo}/>))}
        </div>
    );
};

export {Todos};