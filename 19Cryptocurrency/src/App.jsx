import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [Search, setSearch] = useState("");
  const [cryptoData, setCryptoData] = useState([]);
  const API_KEY = "B1C34B69-AA47-4CB8-9398-27768035AD9F";
  const BASE_URL = "https://rest.coinapi.io/v1/exchangerate/";
  // useEffect(() => {
  //   fetchCryptoData("BTC");
  // }, []);

  const fetchCryptoData = async (title) => {
    const response = await fetch(`${BASE_URL}${crypto}/?apikey=${API_KEY}`);
    const data = await response.json();
    setCryptoData(data);
  };

  return (
    <>
      <h1 className="text-center font-bold text-3xl font-sans text-green-600 ">
        Cryptocurrencies
      </h1>
      <div className="flex items-center row mx-[40%] my-20 gap-y-5">
        <input
          type="text"
          name="search"
          id="search"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        <button
          className="bg-blue-200 h-10 w-40 shadow-2xl rounded-lg"
          onClick={() => fetchCryptoData(Search.toUpperCase())}
        >
          Search
        </button>
      </div>
      <div className="px-40">
        <table className="text-center border-black border-2 w-full p-20">
          <thead className="border-black border-2">
            <tr className="bg-gray-300">
              <th>Currency</th>
              <th>Rate</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* Assuming cryptoData contains an array of currency objects */}
            {cryptoData.map((currencyData, index) => (
              <tr key={index}>
                <td>{currencyData.currency}</td>
                <td>{currencyData.rate}</td>
                <td>{currencyData.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
