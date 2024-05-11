import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/darsheelchudal`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <div className="text-center m-4 bg-gray-400 text-white text-3xl font-bold">
        Github Name: {data.name}
      </div>
      <div className="text-center m-4 bg-gray-400 text-white text-3xl font-bold p-4">
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="git profile image" width={300} />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/darsheelchudal");
  return response.json();
};
