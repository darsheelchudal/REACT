import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        const { advice } = data.slip; // Update to directly get advice from data.slip
        setAdvice(advice);
      })
      .catch((error) => console.error("Error fetching advice:", error));
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white w-[400px]">
        <h5 className="mb-2 text-xl font-medium leading-tight text-red-400">
          Random Quote Generator
        </h5>
        <p className="mb-4 text-base">{advice}</p>
        <button
          type="button"
          className="inline-block rounded bg-pink-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          data-twe-ripple-init
          data-twe-ripple-color="light"
          onClick={fetchAdvice}
        >
          Get Advice
        </button>
      </div>
    </div>
  );
}

export default App;
