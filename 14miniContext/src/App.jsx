import { useState } from "react";

import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1 className="h-20 flex items-center bg-orange-300">
        React : State Management using ContextApi{" "}
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
