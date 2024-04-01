import Slider from "react-slick";
import { useState, useEffect } from "react";

export const ImageCarousel = ({ onChage = () => {} }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true,
    pauseOnHover: false,
  };

  return (
    <Slider afterChange={onChage} className="slider" {...settings}>
      <div className="item i1"></div>
      <div className="item i2"></div>
      <div className="item i3"></div>
      <div className="item i4"></div>
    </Slider>
  );
};
