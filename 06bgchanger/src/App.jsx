import React, {useState} from "react";


function App() {
const [color,setColor] =  useState("olive");
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-xl px-3 py-2">
         <button onClick={() => {
          setColor("red");
         }} className="px-4 py-1 bg-red-800 rounded-full text-white">Red</button>
         <button onClick={() => (setColor("green"))} className="px-4 py-1 bg-green-800 rounded-full text-white">Green</button>
         <button onClick={() => (setColor("blue"))}  className="px-4 py-1 bg-blue-800 rounded-full text-white">Blue</button>
         <button onClick={() => (setColor("yellow"))}  className="px-4 py-1 bg-yellow-800 rounded-full text-white">Yellow</button>



        </div>
         </div>
      </div>
  )
}

export default App
