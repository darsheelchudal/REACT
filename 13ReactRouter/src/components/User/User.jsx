import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { user_id } = useParams();
  return (
    <div className="text-center font-bold text-xl bg-gray-200 py-6">
      User : {user_id}
    </div>
  );
}

export default User;
