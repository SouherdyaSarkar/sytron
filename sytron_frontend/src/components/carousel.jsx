import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel({ imgPaths }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="h-full">
      {imgPaths.map((path, index) => (
        <div
          key={index}
          className="flex items-center justify-center h-full z-60"
        >
          <img
            src={path}
            alt={`img-${index}`}
            className="h-full w-auto object-contain"
          />
        </div>
      ))}
    </Slider>
  );
}
