import React, { useContext } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
// use react-router Link or NavLink


const Navbar = () => {
  const{auth,setAuth}=useContext(AuthContext);



  const navigate=useNavigate();
  const handleLog=()=>{
    if(!auth)
    {
    navigate("/Login")
    }
    else
    {
      navigate("/")
      setAuth(false)
    }
  }

  return (
    <div data-cy="navbar" className="flex">
      {/* <Link data-cy="navbar-home-link">logo</Link>
      <span data-cy="navbar-cart-items-count">{}</span>
      <button data-cy="navbar-login-logout-button"></button> */}
      <Link to="/">Logo</Link>
      <div>
        Cart<span>0</span>
        <button onClick={handleLog}>{`${auth? "Logout" : "Login"}`}</button>
      </div>
    </div>
  );
};

export default Navbar;
