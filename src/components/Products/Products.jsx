import React, { useEffect, useState } from "react";
import axios from 'axios';
import Product from "./Product/Product";

const Products = () => {

  const [cart,setCart]=useState([]);
  
  useEffect(()=>{
    axios({
      url: "http://localhost:8080/products",
      method: "GET"
    })
    .then(res=>{
      setCart(res.data)
    })
    .catch(err=>{

    })
  },[])
  console.log(cart);
  return <div className="grid">
   {cart.map((data)=>(
     <Product data={data}/>
   ))}

  </div>;
};

export default Products;
