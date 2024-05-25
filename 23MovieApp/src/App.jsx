import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);

  const apiKey = "b8036408";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log("Error fetching data");
      }
    };
    fetchData();
  }, [search, apiKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-4">Movie Site </h1>
      <div className="mx-auto mt-5 w-screen max-w-screen-md py-10 leading-6">
        <form
          className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg"
          onSubmit={handleSubmit}
        >
          <svg
            className="absolute left-2 block h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" className=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
          </svg>
          <input
            type="text"
            name="search"
            className="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
            placeholder="Movie :"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            type="submit"
            className="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
          >
            Search
          </button>
        </form>
      </div>
      <div className="grid grid-cols-3">
        <div className="m-10 max-w-sm">
          {Array.isArray(movie) && movie.length > 0 ? (
            movie.map((item, index) => (
              <div
                className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg"
                key={index}
              >
                <div className="relative mx-auto w-36 rounded">
                  <img
                    className="mx-auto h-auto w-full rounded-xl"
                    src={item.Poster}
                    alt=""
                  />
                </div>
                <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
                  {item.Title}
                </h1>
                <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
                  {item.Genre}
                </h3>
                <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
                  {item.Plot}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No results found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
