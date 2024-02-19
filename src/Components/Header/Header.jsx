import "./Header.css";
import { useState, useEffect } from "react";
import cart from "../../assets/cart.svg";
import Logo from "../../assets/Logo.png";
import  axios  from "axios";
const Header = () => {
  const [search, setSearch] = useState("");
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
  };

  const changingInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="headers-parent">
        <div className="header-parent">

          <div className="logo">
            <img src={Logo} alt="Logo Image" />
          </div>

          <div className="search">

            <div className="searchbox">
              <input
                type="text"
                value={search}
                onChange={changingInput}
                placeholder="Search here"
              />
            </div>

            <div className="dropdown1">
              <select onChange={Clicked}>
                <option>All Catagories</option>
                {catagories.map((value, index) => {
                  return <option key={index}>{value.value}</option>;
                })}
              </select>
            </div>

            <div className="button">
              <button>Submit</button>
            </div>

          </div>

          <div className="cart">
            <img src={cart} alt="cart-vector" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
