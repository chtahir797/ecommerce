import "./SpecificCatagory.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { GlobalData } from "../../Context/ProductContext";
import { Link } from "react-router-dom";
const SpecificCatagory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [specificCatagory, setSpecificCatagory] = useState([]);
  const { productID } = useContext(GlobalData);
  const [length, setLength] = useState(5);
  const [showButton, setShowButton] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { productDetails, setProductDetails } = useContext(GlobalData);
  useEffect(() => {
    const getCatagory = async () => {
      try {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        const response = await axios.get(
          `https://inamstore.devblinks.com/api/products/by/category/${productID}`
        );
        setSpecificCatagory(response.data.data);
      } catch (error) {
        console.log("Getting some error: ", error);
      }
    };
    getCatagory();
  }, [productID]);
  console.log("Selected Product is: ", selectedProduct);
  const ShowMore = () => {
    setShowButton(!showButton);
    setLength((pre) => {
      if (pre === 5) {
        setLength(100);
      } else {
        setLength(5);
      }
    });
  };

  const openProduct = (id) => {
    console.log("Product id is: ", id);
    const product = specificCatagory.find((product) => product.id === id);
    setSelectedProduct(product);
    setProductDetails(product);
  };
  console.log("Length is: ", length);
  return (
    <div className="product-parent">
      {/* <div className="products-container"> */}
        {isLoading ? (
          
          <div className="product-found">
            <div class="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : specificCatagory.length === 0 ? (
          <div className="product-found">
            <p>No products found</p>
          </div>
        ) : (
          <>
          <div className="products-container">
            {specificCatagory
              .map((product) => (
                <div key={product.id} onClick={() => openProduct(product.id)}>
                  <div className="product-card">
                    <img
                      src={`https://inamstore.devblinks.com/storage/${product.image}`}
                      alt={product.name}
                    />
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <Link to={`/products/${product.id}`}>View Details</Link>
                  </div>
                </div>
              ))
              .slice(0, length)}
              </div>
              <div className="button">
        <button onClick={ShowMore}>
          {showButton ? "Show More" : "Show Less"}
        </button>
      </div>
          </>
        )}
      {/* </div> */}
      
    </div>
  );
};

export default SpecificCatagory;
