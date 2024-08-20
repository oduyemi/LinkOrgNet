import { Typography } from '@mui/material';
import React from 'react';

const GrowSection = () => {
  return (
    <section className="grow-section section-padding section-bg-3" style={{ backgroundColor: "#34113F"}}>
      <div className="container">
        <div className="grow-wrapper">
          <div className="title-section-area">
            <div className="section-title">
              <span className="wow fadeInUp" style={{ textDecoration: "none" }}>Business strategy we need</span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                GROW COMMUNITY & EXPERIENCE <br />
                ENDLESS POSSIBILITIES
              </h2>
            </div>
            <a href="/about" className="theme-btn theme-btn-2 wow fadeInUp" data-wow-delay=".5s">
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
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Museo Slabs",
                    fontWeight: 300,
                  }}
                >
                  Business Strategy
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Museo Sans",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                >
                  End to end fiber optic cable <br />
                  connectivity for stable
                </Typography>
              </div>
            </div>
            <div className="single-circle-bar wow fadeInUp" data-wow-delay=".5s">
              <div className="circle-bar" data-percent="77" data-duration="1000">
                {/* Circle Bar Animation/Progress Code Here */}
              </div>
              <div className="content">
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Museo Slabs",
                    fontWeight: 300,
                  }}
                >
                  Guaranteed Uptime
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Museo Sans",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                >
                  End to end fiber optic cable <br />
                  connectivity for stable
                </Typography>
              </div>
            </div>
            <div className="single-circle-bar wow fadeInUp" data-wow-delay=".7s">
              <div className="circle-bar" data-percent="85" data-duration="1000">
                {/* Circle Bar Animation/Progress Code Here */}
              </div>
              <div className="content">
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Museo Slabs",
                    fontWeight: 300,
                  }}
                >
                  Proactive Monitoring
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Museo Sans",
                    fontWeight: 300,
                    color: "#fff",
                  }}
                >
                  End to end fiber optic cable <br />
                  connectivity for stable
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowSection;
