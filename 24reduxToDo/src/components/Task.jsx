import React from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../actions/index";
import { useRef } from "react";

const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function addNewTask() {
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch(addToDo(task));
      inputRef.current.value = "";
    }
  }

  return (
    <div className="task-component">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className="taskInput"
        />
        <br />
        <button onClick={addNewTask} className="bg-red-400">
          Add task
        </button>
      </div>
    </div>
  );
};

export default Task;
