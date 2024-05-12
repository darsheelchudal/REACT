import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting : ", { username, password });
    setUser({ username, password });
  };
  return (
    <div>
      <h2 className="h-20 flex items-center p-4 bg-yellow-200">Login</h2>
      <div className="grid grid-cols-1 gap-y-8 p-10">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button
          onClick={handleSubmit}
          className="bg-black text-white w-20 shadow-xl rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
