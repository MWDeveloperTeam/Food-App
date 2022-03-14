import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/style.css";
import image1 from "../media/1.JPG";
import image2 from "../media/2.JPG";
import image3 from "../media/3.JPG";
import image4 from "../media/4.JPG";
import image5 from "../media/5.JPG";

const SliderDemo = () => {
  return (
    <div style={{ margin: "40px" }}>
      <h1>Hello</h1>
      <Slider dots>
        <div>
          <img src={image1} alt="" style={{ width: "100%", height: "400px" }} />
        </div>
        <div>
          <img src={image2} alt="" style={{ width: "100%", height: "400px" }} />
        </div>
        <div>
          <img src={image3} alt="" style={{ width: "100%", height: "400px" }} />
        </div>
        <div>
          <img src={image4} alt="" style={{ width: "100%", height: "400px" }} />
        </div>
        <div>
          <img src={image5} alt="" style={{ width: "100%", height: "400px" }} />
        </div>
      </Slider>
    </div>
  );
};

export default SliderDemo;
