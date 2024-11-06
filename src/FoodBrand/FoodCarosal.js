import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons for arrows
import "./FoodCarousel.css";

const FoodCarousel = () => {
  const settings = {
    // dots: true, // Add dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <button className="custom-next"><FaChevronRight /></button>,
    prevArrow: <button className="custom-prev"><FaChevronLeft /></button>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:4 ,
        },
      },
    ],
  };

  const images = Array(12).fill("https://pinkstore.altisinfonet.in/rest/uploads/attributes/terms/61W8TeKpwML._SL1080_-1.jpg");

  return (
    <div className="custom-food-carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="custom-carousel-item">
            <div>
              <img src={image} alt={`Brand ${index + 1}`} className="custom-carousel-image" />

            </div>
            <div>
              <p className="custom-carousel-label">Brand {index + 1}</p>

            </div>
            
           
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FoodCarousel;
