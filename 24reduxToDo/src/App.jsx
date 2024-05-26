import React from "react";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="p-4 mx-[40%] bg-sky-400">
      <Task />
      <br></br>
      <TaskList />
    </div>
  );
}

export default App;
