import { useState, useEffect } from "react";

import "./App.css";
import {
  ToDoContext,
  ToDoProvider,
  ToDoPrrovider,
} from "./contexts/toDoContext";
import TodoForm from "./components/ToDoForm";
import ToDoItem from "./components";

function App() {
  const [toDo, setTodo] = useState([]);
  const addToDo = (todo) => {
    setTodo((prev) => {
      [{ id: Date.now(), ...todo }, ...prev];
    });
  };

  const updateToDo = (id, todo) => {
    setTodo((prev) =>
      prev.map((prevToDo) => (prevToDo.id === id ? todo : prevToDo))
    );
  };

  const deleteToDo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((prevToDo) =>
        prevToDo === id
          ? { ...prevToDo, completed: !prevToDo.completed }
          : prevToDo
      )
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodo(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify);
  }, [toDo]);

  return (
    <ToDoProvider
      value={{ todos, addToDo, toggleComplete, updateToDo, deleteToDo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3"></div>
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <ToDoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
