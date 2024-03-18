import Slider from "react-slick";

export const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
  };
  return (
    <Slider className="slider" {...settings}>
      <div className="item i1"></div>
      <div className="item i2"></div>
      <div className="item i3"></div>
      <div className="item i4"></div>
    </Slider>
  );
};
