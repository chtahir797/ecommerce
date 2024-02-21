import React, { useEffect, useContext, useState } from "react";
import "./SingleProduct.css";
import { GlobalData } from "../../Context/ProductContext";
const SingleProduct = () => {
  const { productDetails } = useContext(GlobalData); // getting product detail
  const { cartData, setCartData} = useContext(GlobalData); // getting product detail
  const [productData, setProductData] = useState(null); //saving product detail and passing it to addtocart function
  console.log("Displaying product data", productDetails);
  const product = productDetails; // passing tit to state productData
  console.log("Product Data : ", product);
  const [quantity, setQuantity] = useState(0); // Checking quantity

  //increasing quantity
  const Increasing = () => {
    if (quantity == productDetails.available) {
      alert("limit exceed");
    } else {
      setQuantity((pre) => pre + 1);
      alert("Increasing product quantity");
    }
  };
  const Decreasing = () => {
    if (quantity === 0) {
      alert("Cart reaches to zero");
    } else {
      setQuantity((pre) => pre - 1);
      alert("removing product");
    }
  };
  const addToCart = () => {
    if(quantity === 0){
      alert("Atleast 1 product should be added")
    }else{
      setProductData(product);
      alert("Added to cart");
      setCartData(prevcartData => [...prevcartData, productDetails]);
    }

  };
  console.log("My Product Details are: ", productData);
  // console.log("Prodect adding : ", quantity)
  return (
    <>
      <div className="product-container">
        <div className="product-image">
          <img
            src={`https://inamstore.devblinks.com/storage/${product.image}`}
            alt={productDetails.name}
          />
        </div>
        <div className="product-details">
          <h2>{productDetails.name}</h2>
          <p>Price: ${productDetails.price}</p>
          <p>Minimum Quantity: {productDetails.min_qty}</p>
          {productDetails.bulk_price_available && (
            <div>
              <p>Bulk Price: ${productDetails.bulk_price || "Not available"}</p>
              <p>Bulk Quantity: {productDetails.bulk_qty || "Not available"}</p>
            </div>
          )}
          <button onClick={addToCart}>Add to Cart</button>
          
          <button onClick={Decreasing}>-</button>
          <button onClick={Increasing}>+</button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
