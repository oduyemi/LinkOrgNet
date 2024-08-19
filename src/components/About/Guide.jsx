import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import guide from "../../assets/images/guide.png";
import CheckIcon from '@mui/icons-material/Check';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



export const Guide = () => {
    return(
        <section className="manage-it-section fix section-padding pt-0">
            <Box className="container">
                <Box className="manage-it-wrapper">
                   <Box className="row justify-content-between">
                    <Box className="col-lg-6">
                        <Box className="manage-it-content">
                            <Box className="section-title">
                                <span className="wow fadeInUp">How to Manage</span>
                                <Typography 
                                    variant="h2" 
                                    className="wow fadeInUp" 
                                    data-wow-delay=".3s"
                                    sx={{
                                        fontSize: "30px",
                                        fontWeight: "400",
                                        color: "#010156"
                                    }}
                                >
                                    Our Managed IT Services
                                    let you Concentrate on What Matters
                                </Typography>
                            </Box>
                            <Box className="single-tab-items mt-4 mt-md-0">
                                <ul className="nav mb-4" role="tablist">
                                    <li className="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation">
                                        <Link to="#approach" data-bs-toggle="tab" className="nav-link active" aria-selected="true" role="tab">
                                            Our Approach
                                        </Link>
                                    </li>
                                    <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                                        <Link to="#project" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabindex="-1">
                                            Project Goals
                                        </Link>
                                    </li>
                                    <li className="nav-item wow fadeInUp" data-wow-delay=".7s" role="presentation">
                                        <Link to="#advisory" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabindex="-1">
                                            Advisory
                                        </Link>
                                    </li>
                                </ul>
                                <Box className="tab-content">
                                    <Box id="approach" className="tab-pane fade show active" role="tabpanel">
                                        <Box className="tab-content-items">
                                            <Typography 
                                            variant="body1"
                                            className="wow fadeInUp" 
                                            data-wow-delay=".3s"
                                            sx={{
                                                fontSize: "18px",
                                                fontFamily: "Museo Sans",
                                                fontWeight: 300
                                            }}
                                        >
                                                At veroeos accusamus dignissimos ducimus blanditiis volupta delenite atque <br />
                                                corrupti quos dolores et quas molestias excepturi sint occaecatie
                                            </Typography>
                                            <Box className="list-area">
                                                <ul className="wow fadeInUp" data-wow-delay=".5s">
                                                    <li>
                                                        <CheckIcon 
                                                            sx={{
                                                                fontSize: 24,
                                                            }}
                                                        />
                                                        Efficient Sprint Planning
                                                    </li>
                                                    <li>
                                                        <CheckIcon 
                                                            sx={{
                                                                fontSize: 24,
                                                            }}
                                                        />
                                                        Standups and Demos
                                                    </li>
                                                </ul>
                                                <ul className="wow fadeInUp" data-wow-delay=".7s">
                                                    <li>
                                                        <CheckIcon 
                                                            sx={{
                                                                fontSize: 24,
                                                            }}
                                                        />
                                                        Iterative Delivery Approach
                                                    </li>
                                                    <li>
                                                        <CheckIcon 
                                                            sx={{
                                                                fontSize: 24,
                                                            }}
                                                        />
                                                        Problem-solving
                                                    </li>
                                                </ul>
                                            </Box>
                                            <Link to="/about" className="theme-btn wow fadeInUp" data-wow-delay=".9s">
                                                <span>
                                                    Learn More
                                                    <i className="fas fa-chevron-right"></i>
                                                </span>
                                             </Link>
                                        </Box>
                                    </Box>
                                    <Box id="project" className="tab-pane fade" role="tabpanel">
                                        <Box className="tab-content-items">
                                            <p>
                                                At veroeos accusamus dignissimos ducimus blanditiis volupta delenite atque <br />
                                                corrupti quos dolores et quas molestias excepturi sint occaecatie
                                            </p>
                                            <Box className="list-area">
                                                <ul>
                                                    <li>
                                                        <CheckIcon 
                                                            sx={{
                                                                fontSize: 24,
                                                            }}
                                                        />
                                                        Efficient Sprint Planning
                                                    </li>
                                                    <li>
                                                        <CheckIcon 
                                                            sx={{
                                                                fontSize: 24,
                                                            }}
                                                        />
                                                        Standups and Demos
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <CheckIcon 
                                                            sx={{
                                                                fontSize: 24,
                                                            }}
                                                        />
                                                        Iterative Delivery Approach
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check"></i>
                                                        Problem-solving
                                                    </li>
                                                </ul>
                                            </Box>
                                            <Link to="/about" className="theme-btn">
                                                <span className='d-inline' style={{fontFamily: "Museo Sans"}}>
                                                    Learn More
                                                    <ChevronRightIcon 
                                                            sx={{
                                                                fontSize: 24,
                                                                color: "#fff"
                                                            }}
                                                        className='d-inline'
                                                        />
                                                </span>
                                             </Link>
                                        </Box>
                                    </Box>
                                    <Box id="advisory" className="tab-pane fade" role="tabpanel">
                                        <Box className="tab-content-items">
                                            <Typography
                                                variant='body1'>
                                                At veroeos accusamus dignissimos ducimus blanditiis volupta delenite atque <br />
                                                corrupti quos dolores et quas molestias excepturi sint occaecatie
                                            </Typography>
                                            <Box className="list-area">
                                                <ul>
                                                    <li>
                                                        <i className="fas fa-check"></i>
                                                        Efficient Sprint Planning
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check"></i>
                                                        Standups and Demos
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <i className="fas fa-check"></i>
                                                        Iterative Delivery Approach
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check"></i>
                                                        Problem-solving
                                                    </li>
                                                </ul>
                                            </Box>
                                            <Link to="about.html" className="theme-btn">
                                                <span>
                                                    Learn More
                                                    <i className="fas fa-chevron-right"></i>
                                                </span>
                                             </Link>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp" data-wow-delay=".4s">
                        <Box className="manage-image bg-cover" 
                            style={{
                                backgroundImage: `url(${guide})`
                            }}
                        >
                            {/* <Box className="counting-shape">
                                <img src="assets/img/counting.png" alt="shape-img" />
                            </Box> */}
                        </Box>
                    </Box>
                   </Box>
                </Box>
            </Box>
        </section>
    )
}