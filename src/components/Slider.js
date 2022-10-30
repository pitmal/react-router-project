import React, { useEffect, useState } from "react";
import img1 from "../images/home-page-1.jpg";
import img2 from "../images/home-page-2.jpg";
import img3 from "../images/home-page-3.jpg";
import "../styles/Slider.css";
import Pentagons from "./Pentagons";
const images = [img1, img2, img3];
const content = [
  {
    title: "aplikacje internetowe",
    text: "dedykowane rozwiązania"
  },
  {
    title: "marketing internetowy",
    text: "skuteczne działania zwiększające zasięgi"
  },
  {
    title: "kompleksowe usługi",
    text: "od projektowania przez development do analityki"
  }
];

const Slider = () => {
  const [sliderSrc, setSlider] = useState(0);
  const animationActive = true;
  useEffect(sliderSrc => {
    const imgInterval = setInterval(() => {
      setSlider(sliderSrc =>
        sliderSrc === images.length - 1 ? 0 : sliderSrc + 1
      );
    }, 5000);
    return () => {
      clearInterval(imgInterval);
    };
  }, []);
  const style = { backgroundImage: `url(${images[sliderSrc]})` };

  return (
    <>
      <div
        className={`main-page-slider ${
          animationActive ? "animationActive" : null
        }`}
        style={style}
      ></div>
      <div className="content-slider-wraper">
        {<Pentagons />}
        <h1>{content[sliderSrc].title}</h1>
        <p>{content[sliderSrc].text}</p>
      </div>
    </>
  );
};
export default Slider;
