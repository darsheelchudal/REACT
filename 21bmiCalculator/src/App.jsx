import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    const bmi = weight / ((height / 100) * (height / 100));
    setBmiResult(bmi);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        BMI Calculator
      </h1>

      <form onSubmit={calculateBMI}>
        <div className="grid gap-6 mb-6 md:grid-cols-2 m-10">
          <div>
            <label
              htmlFor="height"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Height in cm
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <br />
          <div>
            <label
              htmlFor="weight"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Weight in kg
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto"
        >
          Calculate
        </button>
      </form>

      {bmiResult && (
        <div className="text-center font-bold text-2xl text-green-800">
          <p>Your BMI: {bmiResult.toFixed(2)}</p>
          <p>Result: {interpretBMI(bmiResult)}</p>
        </div>
      )}
    </>
  );
}

// Function to interpret BMI
function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

export default App;
