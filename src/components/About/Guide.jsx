import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import hero1 from "../../assets/images/hero1.jpg";

export const Guide = () => {
    const [activeTab, setActiveTab] = useState('values');

    const renderContent = () => {
        switch (activeTab) {
            case 'values':
                return (
                    <Box>
                        <ul>
                            <li>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "300",
                                        fontFamily: "montserrat",
                                        color: "#010156"
                                    }}
                                    gutterBottom
                                >
                                    Integrity &amp; Honesty
                                </Typography>
                                <Typography
                                    variant="body1" 
                                    className="w-75"
                                    sx={{
                                        fontSize: "15px",
                                        fontWeight: "300",
                                        lineHeight: "1.2", 
                                        fontFamily: "Montserrat"    
                                    }}
                                    gutterBottom
                                >
                                    We are committed to maintaining the highest 
                                    standards of integrity and honesty in all our 
                                    operations. This builds trust with our clients, 
                                    partners, and employees, ensuring long-term 
                                    relationships and a solid reputation in the market.
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "300",
                                        fontFamily: "Montserrat",
                                        color: "#010156"
                                    }}
                                    gutterBottom
                                >
                                    Customer Satisfaction
                                </Typography>
                                <Typography
                                    variant="body1" 
                                    className="w-75"
                                    sx={{
                                        fontSize: "15px",
                                        fontWeight: "300",
                                        lineHeight: "1.2", 
                                        fontFamily: "Montserrat"    
                                    }}
                                >
                                    Our customers are important to us, so 
                                    we strive to understand their needs 
                                    and exceed their expectations through 
                                    exceptional service and support. This 
                                    approach not only enhances customer 
                                    satisfaction but also drives repeat 
                                    business and referrals.
                                </Typography>
                            </li>
                            <li>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "300",
                                        fontFamily: "Montserrat",
                                        color: "#010156"
                                    }}
                                    gutterBottom
                                >
                                    Continuous Learning &amp; Development
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="w-75" 
                                    sx={{
                                        fontSize: "15px",
                                        fontWeight: "300",
                                        lineHeight: "1.2", 
                                        fontFamily: "Montserrat"    
                                    }}
                                >
                                    In the fast-paced IT industry, staying updated 
                                    with the latest technologies and trends is essential.
                                    We provide opportunities for our employees to grow 
                                    their skills and knowledge, ensuring that our team 
                                    remains competent and motivated.
                                </Typography>
                            </li>
                        </ul>
                    </Box>
                );
            case 'vision':
                return (
                    <Box>
                        <Typography
                            variant="body1" 
                            className="w-75"
                            sx={{
                                fontSize: "16px",
                                fontWeight: "400",
                                fontFamily: "Montserrat"
                            }}
                        >
                            To be the most trusted and reliable partner in 
                            our industry, dedicated to upholding the highest 
                            standards of integrity and honesty. We aim to 
                            exceed customer expectations through unwavering 
                            commitment to their satisfaction, while fostering 
                            a culture of continuous learning and development 
                            to drive innovation and excellence.
                        </Typography>
                    </Box>
                );
            case 'mission':
                return (
                    <Box>
                        <Typography 
                            variant="body1" 
                            className="w-75"
                            sx={{
                                fontSize: "16px",
                                fontWeight: "400",
                                fontFamily: "Montserrat"
                            }}
                        >
                            At LinkOrg Net, we are committed to delivering 
                            exceptional service with integrity and honesty
                            at the forefront of everything we do. Our 
                            mission is to achieve unparalleled customer 
                            satisfaction by providing reliable Internet 
                            solutions and continuously enhancing our skills 
                            and knowledge. We strive to create a trustworthy 
                            and innovative environment where our team and 
                            customers can thrive together.
                        </Typography>
                    </Box>
                );
            default:
                return null;
        }
    };

    return (
        <section className="about-section section-padding pt-0">
            <Box className="container">
                <Box className="about-wrapper-2">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box className="manage-it-content">
                                <Box className="section-title">
                                    <span className="wow fadeInUp" 
                                        style={{ textDecoration: "none" }}
                                    >
                                        Our Proven Process
                                    </span>
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
                                        How We Deliver Results
                                    </Typography>
                                </Box>
                                <Box className="single-tab-items mt-4 mt-md-0">
                                    <ul className="nav mb-4" role="tablist" style={{ padding: 0 }}>
                                        <li className="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation">
                                            <Link 
                                                to="#values" 
                                                className={activeTab === 'values' ? "nav-link active" : "nav-link"} 
                                                onClick={() => setActiveTab('values')} 
                                                aria-selected={activeTab === 'values'} 
                                                role="tab"
                                                aria-controls="values-content"
                                                id="values-tab"
                                                style={{
                                                    padding: "10px 20px",
                                                    textDecoration: "none",
                                                    borderRadius: "4px",
                                                    backgroundColor: activeTab === 'values' ? "#010156" : "transparent",
                                                    color: activeTab === 'values' ? "#fff" : "#000",
                                                }}
                                            >
                                                Core Values
                                            </Link>
                                        </li>
                                        <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                                            <Link 
                                                to="#vision" 
                                                className={activeTab === 'vision' ? "nav-link active" : "nav-link"} 
                                                onClick={() => setActiveTab('vision')} 
                                                aria-selected={activeTab === 'vision'} 
                                                role="tab"
                                                aria-controls="vision-content"
                                                id="vision-tab"
                                                style={{
                                                    padding: "10px 20px",
                                                    textDecoration: "none",
                                                    borderRadius: "4px",
                                                    backgroundColor: activeTab === 'vision' ? "#010156" : "transparent",
                                                    color: activeTab === 'vision' ? "#fff" : "#000",
                                                }}
                                            >
                                                Vision Statement
                                            </Link>
                                        </li>
                                        <li className="nav-item wow fadeInUp" data-wow-delay=".7s" role="presentation">
                                            <Link 
                                                to="#mission" 
                                                className={activeTab === 'mission' ? "nav-link active" : "nav-link"} 
                                                onClick={() => setActiveTab('mission')} 
                                                aria-selected={activeTab === 'mission'} 
                                                role="tab"
                                                aria-controls="mission-content"
                                                id="mission-tab"
                                                style={{
                                                    padding: "10px 20px",
                                                    textDecoration: "none",
                                                    borderRadius: "4px",
                                                    backgroundColor: activeTab === 'mission' ? "#010156" : "transparent",
                                                    color: activeTab === 'mission' ? "#fff" : "#000",
                                                }}
                                            >
                                                Mission Statement
                                            </Link>
                                        </li>
                                    </ul>
                                    <Box className="tab-content">
                                        {renderContent()}
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                className="manage-image"
                                sx={{
                                    backgroundImage: `url(${hero1})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    minHeight: '400px',
                                    width: '100%',
                                    borderRadius: '8px' 
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </section>
    );
};
