import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeToDo } from "./redux/slice/todo";

// eslint-disable-next-line react/prop-types
const ToDoItem = ({ id, task }) => {

  console.log("ToDoItem props:", { id, task })

  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("Deleting item with id:", id)
    dispatch(removeToDo({ id }));
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-2">
      <div>{task}</div>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  )
}

export default ToDoItem