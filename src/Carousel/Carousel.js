import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; // Adjust the path if needed

const Carousel = () => {
  const settings = {
    dots: true, // Enable dot indicators for manual navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time interval for autoplay in milliseconds
    arrows: true, // Enable next/prev arrows
    pauseOnHover: true, // Pause autoplay when hovered
    
    responsive: [
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1200, // Tablet devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2500,
        },
      },
    ],
  };

  const images = [
    "https://pinkstore.altisinfonet.in/rest/uploads/home_banner/51b92cad-3ec1-4a2d-95dd-61149cce917e-.jpg",
    "https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_640.jpg", // Replace with your second image URL
  ];

  return (
    <div className="carousel-container"> {/* Added container class */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="carousel-image" width="100%"/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
