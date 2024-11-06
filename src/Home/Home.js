import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS
import Merge from '../HraderComponent/Mearge/Merge';
import Carousel from '../Carousel/Carousel';
import FoodBrand from '../FoodBrand/FoodBrand';
import ProductsMerge from '../Products/ProductsMerge';
import CategoryMain from '../Category/CategoryMain';
import Banner from '../Banner/Banner';
import Stats from '../Stats/Stats';
import RoutingHeader from '../Router/RoutingHeader';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div >
        <Merge />
      </div>
      <div data-aos="fade-up">
        <Carousel />
      </div>
      <div data-aos="fade-up">
        <FoodBrand />
      </div>
      <div data-aos="fade-up">
        <ProductsMerge />
      </div>
      <div data-aos="fade-up">
        <CategoryMain />
      </div>
      <div data-aos="fade-up">
        <Banner />
      </div>
      <div data-aos="fade-up">
        <Stats />
      </div>
      <div data-aos="fade-up">
        <RoutingHeader />
      </div>
      <div data-aos="fade-up">
        <Banner />
      </div>
    </div>
  );
}

export default Home;
