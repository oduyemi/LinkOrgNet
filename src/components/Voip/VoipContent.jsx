import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GradeIcon from '@mui/icons-material/Grade';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';



export const VoipContent = () => {
    return(
        <section className="product-section fix section-padding">
            <Box className="container">
                <Box className="row g-4">
                    <Box className="col-12">
                        <Typography 
                            className=""
                            variant="h2"
                            sx={{
                                color: "#010156",
                                textAlign: "center",
                                fontWeight: "300",
                                marginTop: "30px",
                                marginBottom: "30px",
                                fontSize: "40px",
                                lineHeight: "1.5",
                            }}
                        >
                            VoIP Hardware
                        </Typography>
                    </Box>
                    <Box className="col-xl-3 col-lg-4 col-md-6">
                        <Box className="product-card-items mt-0">
                            <Box className="product-image">
                                <img src={require("../../assets/images/products/Cisco-6823-dect-bundle.png")} 
                                    alt="single-product" />
                                <Box className="product-badge">
                                    {/* <span className="product-badge-item">sale</span> */}
                                 </Box>
                                <ul className="product-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <Link to=""><FavoriteIcon sx={{ color: "red" }} /></Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <AddShoppingCartIcon sx={{ color: "white" }} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to=""><VisibilityIcon sx={{ color: "white" }} /></Link>
                                    </li>
                                </ul>
                            </Box>
                            <Box className="product-content">
                                <h6>
                                    <Link to="" style={{ color: "#010156"}}>Cisco 6823  <br/> DECT Bundle</Link>
                                </h6>
                                <Box className="ratting">
                                    <span>&#8358;210</span>
                                    <Box className="star">
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-xl-3 col-lg-4 col-md-6">
                        <Box className="product-card-items mt-0">
                            <Box className="product-image">
                                <img src={require("../../assets/images/products/Cisco-6825-dect-handset.png")} alt="product-image"/>
                                <Box className="product-badge">
                                    <span className="product-badge-item">sale</span>
                                 </Box>
                                <ul className="product-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <Link to=""><FavoriteIcon sx={{ color: "red" }} /></Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <AddShoppingCartIcon sx={{ color: "white" }} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to=""><VisibilityIcon sx={{ color: "white" }} /></Link>
                                    </li>
                                </ul>
                            </Box>
                            <Box className="product-content">
                                <h6>
                                    <Link to="" style={{ color: "#010156"}}>Cisco-6825 <br/> Dect Handset </Link>
                                </h6>
                                <Box className="ratting">
                                    <span>&#8358;210</span>
                                    <Box className="star">
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-xl-3 col-lg-4 col-md-6">
                        <Box className="product-card-items mt-0">
                            <Box className="product-image">
                                <img src={require("../../assets/images/products/Cisco-6821-sip.png")} alt="product-image" />
                                <Box className="product-badge">
                                    {/* <span className="product-badge-item">sale</span> */}
                                 </Box>
                                <ul className="product-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <Link to=""><FavoriteIcon sx={{ color: "red" }} /></Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <AddShoppingCartIcon sx={{ color: "white" }} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to=""><VisibilityIcon sx={{ color: "white" }} /></Link>
                                    </li>
                                </ul>
                            </Box>
                            <Box className="product-content">
                                <h6>
                                    <Link to="" style={{ color: "#010156"}}>Cisco-6821 <br/> SIP Phone</Link>
                                </h6>
                                <Box className="ratting">
                                    <span>&#8358;210</span>
                                    <Box className="star">
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-xl-3 col-lg-4 col-md-6">
                        <Box className="product-card-items mt-0">
                            <Box className="product-image">
                                <img src={require("../../assets/images/products/Cisco-6841-sip.png")} alt="product-image" />
                                <Box className="product-badge">
                                    {/* <span className="product-badge-item">sale</span> */}
                                 </Box>
                                <ul className="product-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <Link to=""><FavoriteIcon sx={{ color: "red" }} /></Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <AddShoppingCartIcon sx={{ color: "white" }} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" style={{ color: "#010156"}}><VisibilityIcon sx={{ color: "white" }} /></Link>
                                    </li>
                                </ul>
                            </Box>
                            <Box className="product-content">
                                <h6>
                                    <Link to="" style={{ color: "#010156"}}>Cisco 6841 <br/> SIP Phone</Link>
                                </h6>
                                <Box className="ratting">
                                    <span>&#8358;210</span>
                                    <Box className="star">
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-xl-3 col-lg-4 col-md-6">
                        <Box className="product-card-items mt-0">
                            <Box className="product-image">
                                <img src={require("../../assets/images/products/yealink0.png")} alt="product-image" />
                                <Box className="product-badge">
                                    {/* <span className="product-badge-item">sale</span> */}
                                 </Box>
                                <ul className="product-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <Link to=""><FavoriteIcon sx={{ color: "red" }} /></Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <AddShoppingCartIcon sx={{ color: "white" }} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to=""><VisibilityIcon sx={{ color: "white" }} /></Link>
                                    </li>
                                </ul>
                            </Box>
                            <Box className="product-content">
                                <h6>
                                    <Link to="" style={{ color: "#010156"}}>Camera Gear 360 <br/> for Home</Link>
                                </h6>
                                <Box className="ratting">
                                    <span>&#8358;210</span>
                                    <Box className="star">
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-xl-3 col-lg-4 col-md-6">
                        <Box className="product-card-items mt-0">
                            <Box className="product-image">
                                <img src={require("../../assets/images/products/yealink1.png")} alt="product-image" />
                                <Box className="product-badge">
                                    {/* <span className="product-badge-item">sale</span> */}
                                 </Box>
                                <ul className="product-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <Link to="" style={{ color: "#010156"}}><FavoriteIcon sx={{ color: "red" }} /></Link>
                                    </li>
                                    <li>
                                        <Link to="" style={{ color: "#010156"}}>
                                            <AddShoppingCartIcon sx={{ color: "white" }} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" style={{ color: "#010156"}}><VisibilityIcon sx={{ color: "white" }} /></Link>
                                    </li>
                                </ul>
                            </Box>
                            <Box className="product-content">
                                <h6>
                                    <Link to="" style={{ color: "#010156"}}>Virtual Reality <br/> Helmet</Link>
                                </h6>
                                <Box className="ratting">
                                    <span>&#8358;210</span>
                                    <Box className="star">
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-xl-3 col-lg-4 col-md-6">
                        <Box className="product-card-items mt-0">
                            <Box className="product-image">
                                <img src={require("../../assets/images/products/yealink2.png")} alt="product-image" />
                                <Box className="product-badge">
                                    {/* <span className="product-badge-item">sale</span> */}
                                 </Box>
                                <ul className="product-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <Link to=""><FavoriteIcon sx={{ color: "red" }} /></Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <AddShoppingCartIcon sx={{ color: "white" }} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to=""><VisibilityIcon sx={{ color: "white" }} /></Link>
                                    </li>
                                </ul>
                            </Box>
                            <Box className="product-content">
                                <h6>
                                    <Link to="" style={{ color: "#010156"}}>Smart TV Box <br/> for Home</Link>
                                </h6>
                                <Box className="ratting">
                                    <span>&#8358;210</span>
                                    <Box className="star">
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-xl-3 col-lg-4 col-md-6">
                        <Box className="product-card-items mt-0">
                            <Box className="product-image">
                                <img src={require("../../assets/images/products/yealink3.png")} alt="product-image" />
                                <Box className="product-badge">
                                    {/* <span className="product-badge-item">sale</span> */}
                                 </Box>
                                <ul className="product-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <Link to=""><FavoriteIcon sx={{ color: "red" }} /></Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <AddShoppingCartIcon sx={{ color: "white" }} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to=""><VisibilityIcon sx={{ color: "white" }} /></Link>
                                    </li>
                                </ul>
                            </Box>
                            <Box className="">
                                <h6>
                                    <Link to="" style={{ color: "#010156"}}>Virtual Reality <br/> Helmet</Link>
                                </h6>
                                <Box className="ratting">
                                    <span>&#8358;210</span>
                                    <Box className="star">
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}