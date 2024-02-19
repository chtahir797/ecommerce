import "./Slider.css";
import { useState, useRef, useEffect } from "react";
import image1 from "../../assets/Slider/01.jpg";
import image2 from "../../assets/Slider/02.jpg";
import image3 from "../../assets/Slider/03.png";
import image4 from "../../assets/Slider/04.jpg";
import image5 from "../../assets/Slider/05.png";
import next from "../../assets/next.svg";
import previous from "../../assets/previous.svg";
const Slider = () => {
  const images = [image1, image2, image3, image4, image5];
  const [count, setCount] = useState(0); 
  let length = images.length - 1; // Determine images array length
  const backgroundImage = useRef();
  //Function to increment
  const goNext = () => {
    count === length ? setCount(0) : setCount(count + 1)
  };
  //Function to decrement
  const goBack = () => {
    if (count < 1) {
      setCount(length);
    } else {
      setCount(count - 1);
    }
    count < 1 ? setCount(length) : setCount(count - 1)
  };

  //Giving background image
  const stylingSlider = () => {
    backgroundImage.current.style.background = `url(${images[count]})`;
    backgroundImage.current.style.backgroundPosition = "center";
    backgroundImage.current.style.backgroundRepeat = "no-repeat";
    backgroundImage.current.style.backgroundSize = "cover";
  };
  
  useEffect(() => {
    stylingSlider();
  }, [count]);

  return (
    <>
      <div className="slider" ref={backgroundImage}>
        <div className="previous-button">
          <button onClick={goBack}>
            <img src={previous} alt="Next SVG" />
          </button>
        </div>
        <div className="main-content">
          <div className="msg">
            <h3>Grocery at Home</h3>
          </div>
          <div className="heading-msg">
            <h1>Your daily needs</h1>
          </div>
          <div className="description-msg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            doloremque rem quod eos dolorum, delectus debitis quaerat aliquam
            nobis eligendi nihil? Atque nobis excepturi molestias illo sequi
            nulla, esse libero!
          </div>
          <div className="button-msg">
            <div className="button-1">
              <button>Learn More</button>
            </div>
            <div className="button-2">
              <button>Go Shop</button>
            </div>
          </div>
        </div>
        <div className="next-button">
          <button onClick={goNext}>
            <img src={next} alt="Previous SVG" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Slider;
