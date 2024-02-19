import "./SpecificCatagory.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { GlobalData } from '../../Context/ProductContext';	
const SpecificCatagory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [specificCatagory, setSpecificCatagory] = useState([]);
  const { productID } = useContext(GlobalData); 

  useEffect(() => {
    const getCatagory = async () => {
      try {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        const response = await axios.get(
          `https://inamstore.devblinks.com/api/products/by/category/${productID}`
        );
        const filteredProducts = response.data.data.slice(0, 5);
        setSpecificCatagory(filteredProducts);
      } catch (error) {
        console.log("Getting some error: ", error);
      }
    };
    getCatagory();
  }, [productID]);
  console.log(productID)
  return (
    <div className="product-parent">
      <div className="product-container">
        {isLoading  ? (
          <div className="product-found">
            <div class="lds-facebook"><div></div><div></div><div></div></div>
          </div>
        ) : specificCatagory.length === 0? (
          <div className="product-found">
            <p>No products found</p>
          </div>
        ) : (
          specificCatagory.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={`https://inamstore.devblinks.com/storage/${product.image}`}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SpecificCatagory;
