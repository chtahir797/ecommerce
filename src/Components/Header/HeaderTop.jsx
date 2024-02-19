import "./HeaderTop.css";
import van from "../../assets/van.svg";
import world from "../../assets/world.svg";
import tw from "../../assets/tw.svg";
import fb from "../../assets/fb.svg";
import {Link} from 'react-router-dom'
const HeaderTop = () => {
  return (
    <>
    <div className="header-top-parent">
      <div className="header-top">
        <div className="header-top-right">
          <div className="delivery">
            <span>
              <img src={van} alt="delivery-truck" />
            </span>
            <span>
              <p>Free Delivery</p>
            </span>
          </div>
          |
          <div className="return-policy">
            <span>
              <img src={world} alt="return-policy" />
            </span>
            <span>
              <p>Return Policy</p>
            </span>
          </div>
          |
          <div className="follow-us">
            <span>
              <p>Follow Us</p>
            </span>
          </div>
          <div className="social-icons">
            <span>
              <img src={tw} alt="twitter" />
            </span>
            <span>
              <img src={fb} alt="facebook" />
            </span>
          </div>
        </div>
        <div className="header-top-left">
            <div className="login">
                {/* <a href="#">Login</a> */}
                <Link to="#">Login</Link>
            </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default HeaderTop;
