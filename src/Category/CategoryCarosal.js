import React from "react";
import Slider from "react-slick";
import data from "./Category.json"; 
import "./CategoryCarousel.css";

const CategoryCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="customCategoryCarouselContainer">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="carouselCategoryItem">
            <div className="carouselCategoryImage">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="carouselCategoryCardBottom">
              <div className="carouselCategoryTitle">{item.title}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;
