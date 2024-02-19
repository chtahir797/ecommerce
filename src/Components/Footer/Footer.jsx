import Logo from "../../assets/Logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-container">

        <div className="footer-child1">
          <div className="footer-portion1">
            <div className="footer-logo">
              <img src={Logo} alt="App Logo" />
            </div>
            <div className="footer-Contact">
              <p>Got Question? Call us 24/7 [80] 1017 197</p>
            </div>
            <div className="footer-address">
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div className="map">
              <button>View on Map</button>
            </div>
          </div>

          
        <div className="footer-portion2">
          <div className="footer-head1">
            <h3>We Using Safe Payments</h3>
          </div>
          <div className="foot-head2">
            <p>Secured by:</p>
          </div>
        </div>

        <div className="footer-portion3">
          <div className="3heading">
            <h2>Quick Links</h2>
          </div>
          <div className="links3">
            <Link>Support Center</Link>    
            <Link>Term & Conditions </Link>
            <Link>Shipping Privacy</Link> 
            <Link>Policy Help</Link>
            <Link>Products Return FAQS</Link>
          </div>
        </div>

        <div className="footer-portion4">
          <div className="3heading">
            <h2>Quick Links</h2>
          </div>
          <div className="links3">
            <Link>Support Center</Link>    
            <Link>Term & Conditions </Link>
            <Link>Shipping Privacy</Link> 
            <Link>Policy Help</Link>
            <Link>Products Return FAQS</Link>
          </div>
        </div>
        </div>


        <div className="footer-child2">
            <button>Back To Top</button>
        </div>
      </div>
    </>
  );
};
export default Footer;
