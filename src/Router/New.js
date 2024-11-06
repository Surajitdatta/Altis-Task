import React from 'react';
import Slider from 'react-slick'; // Importing the slider component
import data from "./router.json"; // Ensure this file contains the necessary data
import "./New.css"; // Include your CSS file
import 'slick-carousel/slick/slick.css'; // Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Slick theme CSS

const New = () => {
  const settings = {
    infinite: true,
    speed: 1000, // Slower speed for smoother transitions
    slidesToShow: 5, // Show 3 items at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 2 items on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 1 item on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='newCardMain'>
      <Slider {...settings}>
        {
          data.map((v, i) => (
            <div className='newCard' key={i}>
              <div className='newHeader'>
                <div className='newStock'>
                  {v.stock ? "Out Of Stock" : ""}
                </div>
                <div className='newOff'>
                  {v.off ? "5% Off" : ""}
                </div>
              </div>
              <div className='newImage'>
                <img src={v.image} height="180px" width="180px" alt={v.title} />
              </div>
              <div className='newContent'>
                <div className="newRate">
                  {'★'.repeat(v.rating) + '☆'.repeat(5 - v.rating)}
                </div>
                <p>{v.title}</p>
                <b>Price : <span style={{ color: "#d8428d" }}>{v.price}</span></b>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default New;
