import React, {useEffect, useState} from 'react';

import Todo from "../todo/Todo";
import {getTodoAxios} from "../../services/todo.api.service";
// import {getUsersAxios} from "../../services/user.api.axios.service";

const Todos = () => {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        console.log(todos)
        // getUsers().then(value => setUsers(value));
        getTodoAxios().then(({data}) => setTodos(data))
    }, []);
    return (
        <div>
            {todos.map((todo,index) => (<Todo key={index} todo={todo}/>))}
        </div>
    );
};

export {Todos};