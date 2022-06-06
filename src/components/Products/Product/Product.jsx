import React, { useEffect, useState } from "react";


const Product = ({data}) => {
  // Note: this id should come from api
  const[count,setCount]=useState(0);
  const[show,setShow]=useState(false);
const incre=()=>{
  setCount(count+1);
}
const decre=()=>{
  setCount(count-1);
}
useEffect(()=>{
  if(count!=0)
{
  setShow(true)
}
else
{
  setShow(false)
}
},[count])

 
  return (
    <div data-cy={`product-${data.id}`}>
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      {!show &&<button data-cy="product-add-item-to-cart-button" onClick={incre}>Add To Cart</button>}
        <div>
        {show &&<button data-cy="product-increment-cart-item-count-button" onClick={incre}>+</button>}
        {show &&<span data-cy="product-count">
          {count}
        </span>}
        {show &&<button data-cy="product-decrement-cart-item-count-button" onClick={decre}>-</button>}
       {show && <button data-cy="product-remove-cart-item-button" onClick={()=>{setCount(0)}}>Remove Item</button>}
      </div>
      
    </div>
  );
};

export default Product;
{/* <div key={data.id} className="box">
       <h3></h3>
       <h4></h4>
     </div> */}