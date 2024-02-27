import React, { useEffect, useContext, useState } from "react";
import "./SingleProduct.css";
import { GlobalData } from "../../Context/ProductContext";
const SingleProduct = () => {
  const { productDetails } = useContext(GlobalData); // getting product detail
  const { cartData, setCartData } = useContext(GlobalData); // getting product detail
  const [productData, setProductData] = useState(null); //saving product detail and passing it to addtocart function
  console.log("Displaying product data", productDetails);
  const product = productDetails; // passing tit to state productData
  console.log("Product Data : ", product);

  const addToCart = () => {
    setProductData(product);
    alert("Added to cart");
    setCartData((prevcartData) => [...prevcartData, productDetails]);
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
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
