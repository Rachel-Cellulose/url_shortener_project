import React from "react";
import { UserAuth } from "../../../context/AuthContext";

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[300px] m-auto">
      <h1 className="text-center text-xl font-bold pt-12">Altschool has shown <br/>me shege</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button onClick={handleSignOut} >
        Logout
      </button>
    </div>
  );
};

export default Account;
