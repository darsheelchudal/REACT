import React from "react";
import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.github.com/users/darsheelchudal`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="text-center m-4 bg-gray-400 text-white text-3xl font-bold">
        Github Name: {data.name}
      </div>
      <div className="text-center m-4 bg-gray-400 text-white text-3xl font-bold">
        Github followers: {data.followers}
      </div>
    </>
  );
}

export default Github;
