import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState("");

  const appId = "8337e477";
  const appKey = "95711475d2c836f0736ab985a35b468a";

  useEffect(() => {
    const fetchData = async () => {
      const query = search || "chicken";
      const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFood(data.hits);
      } catch (error) {
        console.log("Error fetching data");
      }
    };
    fetchData();
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.querySelector("input[name='search']");
    setSearch(input.value);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">
        Search For Recipe!
      </h1>
      <div className="mx-auto w-screen max-w-screen-md py-10 leading-6">
        <form
          className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg"
          onSubmit={handleSearch}
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
            placeholder="Recipe :"
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
        {food.map((item, index) => (
          <div className="m-10 max-w-sm" key={index}>
            <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
              <div className="relative mx-auto w-36 rounded-full">
                <img
                  className="mx-auto h-auto w-full rounded-xl"
                  src={item.recipe.image}
                  alt=""
                />
              </div>
              <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
                {item.recipe.label}
              </h1>
              <h3 className="font-lg text-semibold text-center leading-6 text-black-600 text-red-800">
                Recipe :
              </h3>
              <p className="text-center text-sm leading-6 text-green-600">
                {item.recipe.url}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
