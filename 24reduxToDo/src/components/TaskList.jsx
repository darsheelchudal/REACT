import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions/index";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Access the tasks array inside the tasks state slice
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="tasklist">
      <div className="display-tasks">
        <h3>Your tasks:</h3>
        <ul className="tasks">
          {tasks && tasks.length > 0 ? (
            tasks.map((task) => (
              <li className="task" key={task.id}>
                * {task.text}
                <button
                  className="delete-btn bg-red-400 mx-4"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li>No tasks available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
