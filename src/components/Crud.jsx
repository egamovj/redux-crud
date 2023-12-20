/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Modal, Table } from "react-bootstrap";

import AddToDo from "./AddToDo";
import ToDoItem from "./ToDoItem";
import { removeToDo } from "./redux/slice/todo";

const Crud = () => {
    const dispatch = useDispatch();
    
    const todoList = useSelector(state => state.todo.list);

    console.log(todoList);

    const loopTodo = todoList.map((todo) => <ToDoItem id={todo.id} task={todo.name} key={todo.id}/>)

    return (
        <div>
            <AddToDo/>
            {loopTodo}
        </div>
    )
}

export default Crud