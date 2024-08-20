import React from 'react';
import { Box } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';


const FaqSection = () => {
  return (
    <Box className="faq-section section-padding section-bg-2">
      <Box className="container">
        <Box className="about-wrapper">
          <Box className="row">
            <Box className="col-lg-6">
              <Box className="about-content">
                <Box className="section-title">
                  <span className="wow fadeInUp">Frequently Asked Questions</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Have a question in <br />
                    your mind?
                  </h2>
                </Box>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Transmds is the world’s leading global logistics <br />
                  supplier — we support industry and trade the
                </p>
                <Box className="circle-progress-bar-wrapper">
                  <Box className="single-circle-bar wow fadeInUp" data-wow-delay=".7s">
                    <Box className="circle-bar" data-percent="68" data-duration="1000"></Box>
                    <Box className="content">
                      <h6>
                        Organizations <br />
                        work support
                      </h6>
                    </Box>
                  </Box>
                  <Box className="single-circle-bar wow fadeInUp" data-wow-delay=".9s">
                    <Box className="circle-bar" data-percent="93" data-duration="1000"></Box>
                    <Box className="content">
                      <h6>
                        Management & <br />
                        Support Services
                      </h6>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-6 mt-5 mt-lg-0">
              <Box className="faq-content style-2 style-color">
                <Box className="faq-accordion">
                  <Box className="accordion" id="accordion">
                    <Box className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                      <h4 className="accordion-header">
                        <button 
                          className="accordion-button collapsed" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target="#faq1" 
                          aria-expanded="false" 
                          aria-controls="faq1"
                        >
                          How to learn digital marketing?
                        </button>
                      </h4>
                      <Box id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <Box className="accordion-body">
                          Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                        </Box>
                      </Box>
                    </Box>
                    <Box className="accordion-item wow fadeInUp" data-wow-delay=".5s">
                      <h4 className="accordion-header">
                        <button 
                          className="accordion-button" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target="#faq2" 
                          aria-expanded="true" 
                          aria-controls="faq2"
                        >
                          Can I use the demos made by Ewebot?
                        </button>
                      </h4>
                      <Box id="faq2" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                        <Box className="accordion-body">
                          Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                        </Box>
                      </Box>
                    </Box>
                    <Box className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                      <h4 className="accordion-header">
                        <button 
                          className="accordion-button collapsed" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target="#faq3" 
                          aria-expanded="false" 
                          aria-controls="faq3"
                        >
                          Why didn’t you showcase my submission?
                        </button>
                      </h4>
                      <Box id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <Box className="accordion-body">
                          Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                        </Box>
                      </Box>
                    </Box>
                    <Box className="accordion-item wow fadeInUp" data-wow-delay=".9s">
                      <h4 className="accordion-header">
                        <button 
                          className="accordion-button collapsed" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target="#faq4" 
                          aria-expanded="false" 
                          aria-controls="faq4"
                        >
                          Why didn’t you showcase my submission?
                        </button>
                      </h4>
                      <Box id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <Box className="accordion-body">
                          Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FaqSection;
