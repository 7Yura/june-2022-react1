import React, {useEffect, useState} from 'react';

import Todo from "../todo/Todo";
import {getTodoAxios} from "../../services/todo.api.service";
// import {getUsersAxios} from "../../services/user.api.axios.service";

const Todos = () => {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        console.log(setTodos(todos));
        // getUsers().then(value => setUsers(value));
        getTodoAxios().then(value => setTodos(value.data))
    }, []);
    return (
        <div>
            {todos.map(todo => (<Todo key={todo.id} todo={todo}/>))}
        </div>
    );
};

export {Todos};