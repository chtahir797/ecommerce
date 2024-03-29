import { useEffect, useState, useContext } from "react";
import axios from "axios";
import SpecificCatagory from "./SpecificCatagory";
import "./Catagories.css";
import { GlobalData } from '../../Context/ProductContext';	
const Catagories = () => {
  const [catagories, setCatagories] = useState([]); // Stores all the catagories comming from api
  const [selectCatagory, setSelectCatagory] = useState(null);// check ehich catagorie is selected
  const [isLoading, setIsLoading] = useState(true); //Loading State
  const { productID, setProductID } = useContext(GlobalData);
  const image = `https://inamstore.devblinks.com/storage/`;

  useEffect(() => {
    const getCatagories = async () => {
      try {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        const response = await axios.get(
          "https://inamstore.devblinks.com/api/category/list"
        );
        setCatagories(response.data.data);
      } catch (error) {
        console.log("Getting some error: ", error);
      }
    };
    getCatagories();
  }, []);

  const changingCatagory = (id) => {
    console.log(id)
    setSelectCatagory(id);
    setProductID(id)
  };
  // console.log("Product ID is: ", productID)
  return (
    <>
      <div className="cards-parent">
        <div className="cards">
          {isLoading ? (
             <div class="lds-facebook"><div></div><div></div><div></div></div>
          ) : (
            catagories.map((value) => {
          
              return (
                <div
                  key={value.id}
                  className={`individual-card ${
                    value.id == productID ? "selected-card" : ""
                  }`}
                  onClick={() => changingCatagory(value.id)}
                >
                  <div className="allcarddata">
                    <div className="img">
                      <img src={image + value.image} alt="img" />
                    </div>
                    <div className="heading">
                      <h4>{value.value}</h4>
                    </div>
                    <div className="description">
                      <p>{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <SpecificCatagory />

    </>
  );
};

export default Catagories;
