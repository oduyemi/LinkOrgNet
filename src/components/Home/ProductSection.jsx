import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';

const ProductSection = () => {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <section className="product-section fix section-padding section-bg-2">
      <div className="container">
        <div className="title-section-area">
          <div className="section-title">
            <span className="wow fadeInUp">Top Sales</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Top Products</h2>
          </div>
          <Link to="/shop" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
            <span>More Products <i className="fas fa-chevron-right"></i></span>
          </Link>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="product-card-items">
              <div className="product-image">
                <img src="assets/img/product/01.jpg" alt="Product" />
                <div className="product-badge">
                  <span className="product-badge-item">sale</span>
                </div>
                <ul className="product-icon d-grid justify-content-center align-items-center">
                  <li>
                    <Link to="/shop-cart"><i className="far fa-heart"></i></Link>
                  </li>
                  <li>
                    <Link to="/shop-cart"><i className="far fa-shopping-cart"></i></Link>
                  </li>
                  <li>
                    <Link to="/shop-details"><i className="far fa-eye"></i></Link>
                  </li>
                </ul>
              </div>
              <div className="product-content">
                <h6>
                  <Link to="/shop-details">Archer Router <br /> for Home</Link>
                </h6>
                <div className="ratting">
                  <span>$210</span>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
            <div className="product-card-items">
              <div className="product-image">
                <img src="assets/img/product/02.jpg" alt="Product" />
                <div className="product-badge">
                  <span className="product-badge-item">sale</span>
                </div>
                <ul className="product-icon d-grid justify-content-center align-items-center">
                  <li>
                    <Link to="/shop-cart"><i className="far fa-heart"></i></Link>
                  </li>
                  <li>
                    <Link to="/shop-cart"><i className="far fa-shopping-cart"></i></Link>
                  </li>
                  <li>
                    <Link to="/shop-details"><i className="far fa-eye"></i></Link>
                  </li>
                </ul>
              </div>
              <div className="product-content">
                <h6>
                  <Link to="/shop-details">Smart TV Box <br /> for Home</Link>
                </h6>
                <div className="ratting">
                  <span>$210</span>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="product-card-items">
              <div className="product-image">
                <img src="assets/img/product/03.jpg" alt="Product" />
                <div className="product-badge">
                  <span className="product-badge-item">sale</span>
                </div>
                <ul className="product-icon d-grid justify-content-center align-items-center">
                  <li>
                    <Link to="/shop-cart"><i className="far fa-heart"></i></Link>
                  </li>
                  <li>
                    <Link to="/shop-cart"><i className="far fa-shopping-cart"></i></Link>
                  </li>
                  <li>
                    <Link to="/shop-details"><i className="far fa-eye"></i></Link>
                  </li>
                </ul>
              </div>
              <div className="product-content">
                <h6>
                  <Link to="/shop-details">Virtual Reality <br /> Helmet</Link>
                </h6>
                <div className="ratting">
                  <span>$210</span>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
            <div className="product-card-items">
              <div className="product-image">
                <img src="assets/img/product/04.jpg" alt="Product" />
                <div className="product-badge">
                  <span className="product-badge-item">sale</span>
                </div>
                <ul className="product-icon d-grid justify-content-center align-items-center">
                  <li>
                    <Link to="/shop-cart"><i className="far fa-heart"></i></Link>
                  </li>
                  <li>
                    <Link to="/shop-cart"><i className="far fa-shopping-cart"></i></Link>
                  </li>
                  <li>
                    <Link to="/shop-details"><i className="far fa-eye"></i></Link>
                  </li>
                </ul>
              </div>
              <div className="product-content">
                <h6>
                  <Link to="/shop-details">Camera Gear 360 <br /> for Home</Link>
                </h6>
                <div className="ratting">
                  <span>$210</span>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
