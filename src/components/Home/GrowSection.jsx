import React from 'react';

const GrowSection = () => {
  return (
    <section className="grow-section section-padding section-bg-3">
      <div className="container">
        <div className="grow-wrapper">
          <div className="title-section-area">
            <div className="section-title style-2">
              <span className="text-white wow fadeInUp">Business strategy we need</span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                GROW COMMUNITY & EXPERIENCE <br />
                ENDLESS POSSIBILITIES
              </h2>
            </div>
            <a href="about.html" className="theme-btn theme-btn-2 hover-white wow fadeInUp" data-wow-delay=".5s">
              <span>
                Discover More
                <i className="fas fa-chevron-right"></i>
              </span>
            </a>
          </div>
          <div className="circle-progress-bar-wrapper">
            <div className="single-circle-bar wow fadeInUp" data-wow-delay=".3s">
              <div className="circle-bar" data-percent="89" data-duration="1000">
                {/* Circle Bar Animation/Progress Code Here */}
              </div>
              <div className="content">
                <h6>Business Strategy</h6>
                <p>
                  End to end fiber optic cable <br />
                  connectivity for stable
                </p>
              </div>
            </div>
            <div className="single-circle-bar wow fadeInUp" data-wow-delay=".5s">
              <div className="circle-bar" data-percent="77" data-duration="1000">
                {/* Circle Bar Animation/Progress Code Here */}
              </div>
              <div className="content">
                <h6>Guaranteed Uptime</h6>
                <p>
                  End to end fiber optic cable <br />
                  connectivity for stable
                </p>
              </div>
            </div>
            <div className="single-circle-bar wow fadeInUp" data-wow-delay=".7s">
              <div className="circle-bar" data-percent="85" data-duration="1000">
                {/* Circle Bar Animation/Progress Code Here */}
              </div>
              <div className="content">
                <h6>Proactive Monitoring</h6>
                <p>
                  End to end fiber optic cable <br />
                  connectivity for stable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowSection;
