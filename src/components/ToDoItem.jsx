import { useState } from "react";
import { useDispatch } from "react-redux";
import { Badge } from "react-bootstrap";
import { FaCheck, FaTimes, FaEdit, FaSave } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { removeToDo, updateStatus, editToDo } from "./redux/slice/todo";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ToDoItem = ({ id, task, isDone, createdAt, updatedAt, onClickRemove }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    console.log("Save Clicked - ID:", id, "Edited Task:", editedTask);
    dispatch(editToDo({ id, name: editedTask }));
    setEditing(false);
  };

  const handleStatusUpdate = () => {
    dispatch(updateStatus({ id }));
  };

  // const handleRemove = () => {
  //   dispatch(removeToDo({ id }));
  // };

  return (
    <tr>
      <td>
        {editing ? (
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
        ) : (
          <p className={`todo-item ${isDone && "done"}`}>{task}</p>
        )}
        <Badge bg="secondary">{createdAt}</Badge>
      </td>
      <td>
        <Badge bg={isDone ? "success" : "danger"}>
          {isDone ? "Done" : "Pending"}
        </Badge>
        {isDone && <p>{updatedAt}</p>}
      </td>
      {!isDone && (
        <>
          <td>
            {editing ? (
              <div style={{ color: "blue" }} onClick={handleSave}>
                <FaSave />
              </div>
            ) : (
              <div style={{ color: "orange" }} onClick={handleEdit}>
                <FaEdit />
              </div>
            )}
          </td>
          <td>
            <div style={{ color: "green" }} onClick={handleStatusUpdate}>
              <FaCheck />
            </div>
          </td>
        </>
      )}
      <td>
        <div style={{ color: 'red' }} onClick={() => onClickRemove({ id })}>
          <FaTimes />
        </div>
      </td>
    </tr>
  );
};

export default ToDoItem;
