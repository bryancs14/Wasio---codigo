import React from "react";
import AuthContext from "./authContext";

const AuthState = (props) => {
  return (
    <AuthContext.Provider value={{}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
