import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const[auth,setAuth]=useState(false);

   const login=()=>{
     setAuth(false);
   }
   const logout=()=>{
     setAuth(true);
   }

  return <AuthContext.Provider value={{auth,login,logout,setAuth}}>{children}</AuthContext.Provider>;
};
