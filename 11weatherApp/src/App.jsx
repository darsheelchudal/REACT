import { useState } from "react";

import "./App.css";

const api = {
  key: "e7296d109e0ead1aac198cb95749ea2a",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="content">
        <h1 className="">Hello, world!</h1>
        <p>This is some content.</p>
      </div>
    </>
  );
}

export default App;
