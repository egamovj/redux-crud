import { useDispatch } from "react-redux";
import { updateStatus } from "./redux/slice/todo";

import { Badge } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ToDoItem = (todo) => {

  const { task, isDone, createdAt, updatedAt, onClickRemove, id } = todo;

  const dispatch = useDispatch();
  const handleClick = ({ id }) => {
    dispatch(updateStatus({ id }))
    console.log('clicked');
  }

  console.log();

  return (
    <tr>
            <td>
                <p className={`todo-item ${isDone && "done"}`}>{task}</p>
                <Badge bg="secondary">{createdAt}</Badge>
            </td>
            <td>
                <Badge bg={isDone ? 'success' : 'danger'}>{isDone ? 'Done' : 'Pending'}</Badge>
                {isDone && <p>{updatedAt}</p>}
            </td>
            {!isDone &&
                <td>
                    <div style={{ color: 'green' }} onClick={() => handleClick({ id })}>
                        <FaCheck />
                    </div>
                </td>
            }
            <td colSpan={isDone ? 2 : 1}>
                <div style={{ color: 'red' }} onClick={() => onClickRemove({ id })}>
                    <FaTimes />
                </div>
            </td>
        </tr>
  )
}

export default ToDoItem