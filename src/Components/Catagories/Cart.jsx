import './Cart.css'
import React, { useContext, useState } from "react";
import { GlobalData } from "../../Context/ProductContext";
const Cart = () =>{
    const { cartData } = useContext(GlobalData); // getting product detail
    console.log(cartData)
    return(
        <>
        <h1>Add to Cart</h1>
        </>
    )
}
export default Cart