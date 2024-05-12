import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <div>Please login</div>;
  }
  return (
    <>
      <div className="w-full bg-red-400">Welcome :</div>
    </>
  );
}

export default Profile;
