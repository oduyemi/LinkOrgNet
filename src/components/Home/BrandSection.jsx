import React from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles if not already imported

const BrandSection = () => {
  React.useEffect(() => {
    // Initialize Swiper after component mounts
    new Swiper('.brand-slider-2', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <div className="brand-section-5 section-padding">
      <div className="container">
        <h5 className="text-center pb-5">Trusted by the world’s best</h5>
        <div className="swiper brand-slider-2">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="brand-img center">
                <img src="assets/img/brand/client-1.png" alt="Brand 1"/>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img center">
                <img src="assets/img/brand/client-2.png" alt="Brand 2"/>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img center">
                <img src="assets/img/brand/client-3.png" alt="Brand 3"/>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img center">
                <img src="assets/img/brand/client-4.png" alt="Brand 4"/>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img center">
                <img src="assets/img/brand/client-5.png" alt="Brand 5"/>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img center">
                <img src="assets/img/brand/client-6.png" alt="Brand 6"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
