import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate=useNavigate();
  const{auth,login,logout}=useContext(AuthContext);

  const handleCred=()=>{
    if(auth) login()
    else logout()
    navigate("/Products");
  }

  return (
    <div>
      <input data-cy="login-email" type="email" placeholder="Enter Email"/>
      <input data-cy="login-password" type="Password" placeholder="Enter Password"/>
      <button data-cy="login-submit" onClick={handleCred}>Login</button>
    </div>
  );
};

export default Login;
