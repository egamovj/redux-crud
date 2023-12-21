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

    const [show, setShow] = useState(false);
    const [deleteToDo, setDeleteToDo] = useState({});

    const handleClickRemove = (todo) => {
        setShow(true);
        setDeleteToDo(todo);
    }

    const handleRemove = () => {
        dispatch(removeToDo(deleteToDo));
        setShow(false);
    }
    console.log(todoList)
    
    const loopTodo = todoList.map((todo) => <ToDoItem id={todo.id} task={todo.name} key={todo.id} isDone={todo.isDone} createdAt={todo.createAt} updatedAt={todo.updateAt} onClickRemove={handleClickRemove}/>)

    return (
        <Container>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Remove todo?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Siz rostdan ham itemni o`chirmoqchimisiz!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleRemove}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
            <AddToDo />
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {loopTodo}
                </tbody>
            </Table>
        </Container>
    )
}

export default Crud