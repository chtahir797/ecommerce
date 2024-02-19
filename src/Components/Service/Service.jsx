import image from '../../assets/back.png'
import './Service.css'
import Sponsor from './Sponsor'
import HappyCustomers from './HappyCustomer';
import NewsLetter from './NewsLetter';
const Service = () => {
  return (
    <>
    <div className="services">
    <div className="delivery-component">
      <div className="delivery-item">
        <h3>Free Delivery</h3>
        <p>from $78</p>
      </div>
      <div className="delivery-item">
        <h3>99% Customer</h3>
        <p>feedbacks</p>
      </div>
      <div className="delivery-item">
        <h3>10 Days</h3>
        <p>for free return</p>
      </div>
      <div className="delivery-item">
        <h3>Payment</h3>
        <p>secure system</p>
      </div>
      <div className="delivery-item">
        <h3>24/7</h3>
        <p>online supports</p>
      </div>
    </div>
    <div className="img-box">
        <img src={image} alt="Bonus" />
    </div>
    </div>
    <Sponsor />
    <HappyCustomers />
    <NewsLetter />
    </>
  );
};

export default Service;
