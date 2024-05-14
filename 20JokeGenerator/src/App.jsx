import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () => {
      const res = await fetch(
        `https://sv443.net/jokeapi/v2/joke/Programming?type=single`
      );
      const data = await res.json();
      setJoke(data.joke);
    };

    fetchJoke(); // Fetch joke when the component mounts
  }, []);

  const handleClick = async () => {
    await fetchJoke(); // Fetch joke when the button is clicked
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Random Joke Generator!</h1>
      <button className="bg-red-300 rounded-xl w-40" onClick={handleClick}>
        Generate Joke
      </button>
      <p>{joke}</p>
    </>
  );
}

export default App;
