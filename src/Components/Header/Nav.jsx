import { useEffect, useState, useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import List from "../../assets/list.svg";
import axios from "axios";
import { GlobalData } from '../../Context/ProductContext';	

const Nav = () => {
  //context
  const { productID, setProductID } = useContext(GlobalData);
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    const getCatagories = async () => {
      const allCatagories = await axios
        .get("https://inamstore.devblinks.com/api/category/list")
        .then((res) => res.data.data)
        .catch((error) => console.log("Getting some error: ", error));
      setCatagories(allCatagories);
    };
    getCatagories();
  }, []);

  const Clicked = (e) => {
    console.log("Clicked", e.target.value);
    setProductID(e.target.value)
  };

  return (
    <>
      <div className="nav-container">

        <div className="dropdown">
          <div className="list">
            <img src={List} alt="list SVG" />
          </div>

          <div className="drop">
            <select onChange={Clicked} value={productID}>
              <option>All Catagories</option>
              {catagories.map((value, index) => {
                return <option key={index}  value={value.id} >{value.value}</option>;
              })}
            </select>
          </div>



        </div>

        <div className="nav-bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Nav;
