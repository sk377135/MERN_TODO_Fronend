import React, { useContext } from "react";
import { Context } from "../main";

import { Navigate, json } from "react-router-dom";

const Profile = () => {
  const { isAuthenticated, user } = useContext(Context);
  if (!isAuthenticated) return <Navigate to={"/login"} />;
  return (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
