import "./SpecificCatagory.css";
import ShowMoreProducts from "./ShowMoreProducts";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { GlobalData } from "../../Context/ProductContext";
const SpecificCatagory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [specificCatagory, setSpecificCatagory] = useState([]);
  const { productID } = useContext(GlobalData);
  const [length, setLength] = useState(5)
  const [showButton, setShowButton] = useState(true)

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
  console.log(productID);
  const ShowMore = () => {
    setShowButton(!showButton)
    setLength((pre)=>{
      if(pre === 5){
        setLength(100)
      } else{
        setLength(5)
      }
    })
  };
  console.log('Length is: ', length)
  return (
    <div className="product-parent">
      <div className="product-container">
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
          specificCatagory
            .map((product) => (
              <div key={product.id}>
                <div className="product-card">
                  <img
                    src={`https://inamstore.devblinks.com/storage/${product.image}`}
                    alt={product.name}
                  />
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
            ))
            .slice(0, length)
        )}
      </div>
      <div className="button">
        <button onClick={ShowMore}>{showButton ? 'Show More' : 'Show Less'}</button>
      </div>
    </div>
  );
};

export default SpecificCatagory;
