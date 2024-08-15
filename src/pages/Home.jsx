import React from "react";
import { Box} from "@mui/material"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection";



const Home = () => {
    return(
        <Box>
    <HeroSection/>

            {/* Service Section Start  */}
        <section className="service-section section-bg-4 fix section-padding">
            <div className="container">
                <div className="title-section-area">
                    <div className="section-title style-2">
                        <span className="wow fadeInUp">Our Services Area</span>  
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Best Digital Broadband <br/>
                            Service For People
                        </h2>  
                    </div>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                        Transmds is the world’s driving worldwide coordinations supplier <br/> uphold industry and exchange the worldwide trade of merchandi <br/>
                        do eiusmod tempor incididunt ut labore et simply free text dolore
                    </p>
                </div>
                <div className="service-wrapper-3">
                    <div className="service-box-items style-2 wow fadeInUp" data-wow-delay=".3s">
                        <div className="icon">
                            <i className="flaticon-wifi-router-2"></i>
                        </div>
                        <div className="content">
                            <h6>
                                <a href="service-details.html">
                                    Fiber Line & Broadband Line
                                </a>
                            </h6>
                        </div>
                    </div>
                    <div className="service-box-items style-2 active wow fadeInUp" data-wow-delay=".5s">
                        <div className="icon">
                            <i className="flaticon-connection"></i>
                        </div>
                        <div className="content">
                            <h6>
                                <a href="service-details.html">
                                    Family Internet Phone pack
                                </a>
                            </h6>
                        </div>
                    </div>
                    <div className="service-box-items style-2 wow fadeInUp" data-wow-delay=".7s">
                        <div className="icon">                              
                            <i className="flaticon-smart-tv-1"></i>
                        </div>
                        <div className="content">
                            <h6>
                                <a href="service-details.html">
                                    Business Smart Television
                                </a>
                            </h6>
                        </div>
                    </div>
                    <div className="service-box-items style-2 wow fadeInUp" data-wow-delay=".8s">
                        <div className="icon">                              
                            <i className="flaticon-server"></i>
                        </div>
                        <div className="content">
                            <h6>
                                <a href="service-details.html">
                                    Internet & Cyber Security
                                </a>
                            </h6>
                        </div>
                    </div>
                    <div className="service-box-items style-2 wow fadeInUp" data-wow-delay=".9s">
                        <div className="icon">                              
                            <i className="flaticon-computer-networks"></i>
                        </div>
                        <div className="content">
                            <h6>
                                <a href="service-details.html">
                                   best Smart Broadband & network
                                </a>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="service-text-area text-center mt-5 wow fadeInUp" data-wow-delay=".4s">
                    <h5>
                        Bring them together and you overcome the ordinary.
                        <a href="service.html" className="link-btn link-btn-2">
                            <span>View More Service</span>
                            <i className="fal fa-plus"></i>
                        </a>
                    </h5>
                </div>
            </div>
        </section>

         {/* About Section Start  */}
        <section className="about-section section-padding">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{backgroundImage: "url('assets/img/about/about-5.jpg')"}}>
                                    <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                        <img src="assets/img/about/about-6.jpg" alt="about-img"/>
                                    </div>
                                </div>
                                <div className="circle-shape">
                                    <img src="assets/img/about/circle-2.png" alt="img" className="text-circle"/>
                                    <div className="about-title">
                                        <h2><span className="count">13</span></h2>
                                        <p>Years of Experince</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="about-content">
                                <div className="section-title style-2">
                                    <span className="wow fadeInUp">BEST IT SOLUTIONS</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Best Internet <span>Agency</span> For People
                                    </h2>
                                </div>
                                <p className=" mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    Transmds is the world’s driving worldwide coordinations supplier  we uphold industry and exchange the worldwide trade of merchandi world’s driving worldwide coordinations supplier — we uphold industry and exchange the
                                </p>
                                <div className="single-tab-items">
                                    <ul className="nav mb-4" role="tablist">
                                        <li className="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation">
                                            <a href="#integrity" data-bs-toggle="tab" className="nav-link active" aria-selected="true" role="tab">
                                                integrity
                                            </a>
                                        </li>
                                        <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                                            <a href="#obejectives" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabindex="-1">
                                                obejectives
                                            </a>
                                        </li>
                                        <li className="nav-item wow fadeInUp" data-wow-delay=".7s" role="presentation">
                                            <a href="#excellence" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabindex="-1">
                                                excellence
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div id="integrity" className="tab-pane fade show active" role="tabpanel">
                                        <div className="about-tabs-area">
                                            <div className="about-list-items">
                                                <div className="video-image wow fadeInUp" data-wow-delay=".3s">
                                                    <img src="assets/img/about/video.jpg" alt="img"/>
                                                    <div className="video-box">
                                                        <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                                                            <i className="fas fa-play"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <ul className="wow fadeInUp" data-wow-delay=".4s">
                                                   <li>
                                                        <i className="far fa-check"></i>
                                                        Technology Growth
                                                   </li> 
                                                   <li>
                                                        <i className="far fa-check"></i>
                                                        Customer Oriented Program
                                                   </li> 
                                                   <li>
                                                        <i className="far fa-check"></i>
                                                        Dedicated Team member
                                                   </li> 
                                                   <li>
                                                        <i className="far fa-check"></i>
                                                        Customer Oriented Program
                                                    </li> 
                                                </ul>
                                            </div>
                                            <div className="about-author">
                                                <div className="author-image wow fadeInUp" data-wow-delay=".3s">
                                                    <img src="assets/img/about/client-2.png" alt="author-img"/>
                                                    <div className="content">
                                                        <h6>5m+ Customer</h6>
                                                    </div>
                                                </div>
                                                <div className="author-contact wow fadeInUp" data-wow-delay=".5s">
                                                    <div className="icon">
                                                        <img src="assets/img/contact.png" alt="img"/>
                                                    </div>
                                                    <div className="content">
                                                        <p>Phone:</p>
                                                        <h6><a href="tel:++23645689622">+236 (456) 896 22</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="obejectives" className="tab-pane fade" role="tabpanel">
                                        <div className="about-tabs-area">
                                            <div className="about-list-items">
                                                <div className="video-image">
                                                    <img src="assets/img/about/video.jpg" alt="img"/>
                                                    <div className="video-box">
                                                        <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                                                            <i className="fas fa-play"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <ul>
                                                   <li>
                                                        <i className="far fa-check"></i>
                                                        Technology Growth
                                                   </li> 
                                                   <li>
                                                        <i className="far fa-check"></i>
                                                        Customer Oriented Program
                                                   </li> 
                                                   <li>
                                                        <i className="far fa-check"></i>
                                                        Dedicated Team member
                                                   </li> 
                                                   <li>
                                                        <i className="far fa-check"></i>
                                                        Customer Oriented Program
                                                    </li> 
                                                </ul>
                                            </div>
                                            <div className="about-author">
                                                <div className="author-image">
                                                    <img src="assets/img/about/client-2.png" alt="author-img"/>
                                                    <div className="content">
                                                        <h6>5m+ Customer</h6>
                                                    </div>
                                                </div>
                                                <div className="author-contact">
                                                    <div className="icon">
                                                        <img src="assets/img/contact.png" alt="img"/>
                                                    </div>
                                                    <div className="content">
                                                        <p>Phone:</p>
                                                        <h6><a href="tel:++23645689622">+236 (456) 896 22</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="excellence" className="tab-pane fade" role="tabpanel">
                                        <div className="about-tabs-area">
                                            <div className="about-list-items">
                                                <div className="video-image">
                                                    <img src="assets/img/about/video.jpg" alt="img"/>
                                                    <div className="video-box">
                                                        <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                                                            <i className="fas fa-play"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <ul>
                                                   <li>
                                                        <i className="far fa-check"></i>
                                                        Technology Growth
                                                   </li> 
                                                   <li>
                                                        <i className="far fa-check"></i>
                                                        Customer Oriented Program
                                                   </li> 
                                                   <li>
                                                        <i className="far fa-check"></i>
                                                        Dedicated Team member
                                                   </li> 
                                                   <li>
                                                        <i className="far fa-check"></i>
                                                        Customer Oriented Program
                                                    </li> 
                                                </ul>
                                            </div>
                                            <div className="about-author">
                                                <div className="author-image">
                                                    <img src="assets/img/about/client-2.png" alt="author-img"/>
                                                    <div className="content">
                                                        <h6>5m+ Customer</h6>
                                                    </div>
                                                </div>
                                                <div className="author-contact">
                                                    <div className="icon">
                                                        <img src="assets/img/contact.png" alt="img"/>
                                                    </div>
                                                    <div className="content">
                                                        <p>Phone:</p>
                                                        <h6><a href="tel:++23645689622">+236 (456) 896 22</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* feature Icon Section Start  */}
        <section className="feature-icon-area section-padding pt-0">
            <div className="container custom-container-2">
                <div className="feature-icon-wrapper">
                    <div className="icon-items wow fadeInUp" data-wow-delay=".2s">
                        <div className="icon">
                            <i className="flaticon-speedometer"></i>
                        </div>
                        <h4>Ultra-speed Connection</h4>
                    </div>
                    <div className="icon-items wow fadeInUp" data-wow-delay=".4s">
                        <div className="icon">
                            <i className="flaticon-television"></i>
                        </div>
                        <h4>250+ World Channels</h4>
                    </div>
                    <div className="icon-items wow fadeInUp" data-wow-delay=".6s">
                        <div className="icon">
                            <i className="flaticon-wifi-router-1"></i>
                        </div>
                        <h4>Free Installation</h4>
                    </div>
                    <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                        <div className="icon">
                            <i className="flaticon-smart-tv-4"></i>
                        </div>
                        <h4>4K UHD Quality</h4>
                    </div>
                    <div className="icon-items wow fadeInUp" data-wow-delay=".8s">
                        <div className="icon">
                            <i className="flaticon-money-banking"></i>
                        </div>
                        <h4>Flexible Tariff Plans</h4>
                    </div>
                    <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                        <div className="icon">
                            <i className="flaticon-customer-support"></i>
                        </div>
                        <h4>Fast Support 24/7</h4>
                    </div>
                </div>
            </div>
        </section>

       {/* Choose Package Section Start  */}
        <section className="choose-package-section bg-cover section-padding" style={{backgroundImage: "url('assets/img/choose-bg.jpg')"}}> 
            <div className="container">
                <div className="choose-package-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="choose-package-content">
                                <div className="section-title">
                                    <span className="wow fadeInUp">CHOOSE PACKAGE</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Choose Ultra-Fast Internet Package For Usage
                                    </h2>
                                </div>
                                <ul className="nav" role="tablist">
                                    <li className="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation">
                                        <a href="#tab-1" data-bs-toggle="tab" className="nav-link active" aria-selected="true" role="tab">
                                            10 Mbps
                                        </a>
                                    </li>
                                    <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                                        <a href="#tab-2" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabindex="-1">
                                            20 Mbps
                                        </a>
                                    </li>
                                    <li className="nav-item wow fadeInUp" data-wow-delay=".7s" role="presentation">
                                        <a href="#tab-3" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabindex="-1">
                                            30 Mbps
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="tab-1" className="tab-pane fade show active" role="tabpanel">
                                        <div className="choose-tab-price-items">
                                            <div className="choose-tab-price-area">
                                                <div className="price-monthly wow fadeInUp" data-wow-delay=".3s">
                                                    <h5><sub>$</sub>25<span>/ 1 month</span></h5>
                                                </div>
                                                <div className="price-installation wow fadeInUp" data-wow-delay=".5s">
                                                    <h5><sub>$</sub>35<span>/ Installation Fee</span></h5>
                                                </div>
                                            </div>
                                            <ul className="list wow fadeInUp" data-wow-delay=".7s">
                                                <li>
                                                    <i className="far fa-check"></i>
                                                    Preaching Worship An Online Family
                                                </li>
                                                <li>
                                                    <i className="far fa-check"></i>
                                                    Preaching Worship An Online Family
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="tab-2" className="tab-pane fade" role="tabpanel">
                                        <div className="choose-tab-price-items">
                                            <div className="choose-tab-price-area">
                                                <div className="price-monthly">
                                                    <h5><sub>$</sub>45<span>/ 1 month</span></h5>
                                                </div>
                                                <div className="price-installation">
                                                    <h5><sub>$</sub>65<span>/ Installation Fee</span></h5>
                                                </div>
                                            </div>
                                            <ul className="list">
                                                <li>
                                                    <i className="far fa-check"></i>
                                                    Preaching Worship An Online Family
                                                </li>
                                                <li>
                                                    <i className="far fa-check"></i>
                                                    Preaching Worship An Online Family
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="tab-3" className="tab-pane fade" role="tabpanel">
                                        <div className="choose-tab-price-items">
                                            <div className="choose-tab-price-area">
                                                <div className="price-monthly">
                                                    <h5><sub>$</sub>85<span>/ 1 month</span></h5>
                                                </div>
                                                <div className="price-installation">
                                                    <h5><sub>$</sub>99<span>/ Installation Fee</span></h5>
                                                </div>
                                            </div>
                                            <ul className="list">
                                                <li>
                                                    <i className="far fa-check"></i>
                                                    Preaching Worship An Online Family
                                                </li>
                                                <li>
                                                    <i className="far fa-check"></i>
                                                    Preaching Worship An Online Family
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </div>   
        </section>

        {/* Cta Subscribe Section Start  */}
        <section className="cta-subscribe-section fix section-padding">
            <div className="container">
                <div className="cta-subscribe-wrapper">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                            <div className="cta-subscribe-image">
                                <img src="assets/img/banner/cta-tv.png" alt="img"/>
                            </div>
                        </div>
                        <div className="col-lg-5 mt-5 mt-md-0">
                            <div className="cta-subscribe-content style-2">
                                <div className="section-title">
                                    <span className="wow fadeInUp">Subscribe  Now</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Enjoy Sports Movies, <br/>
                                        TV Shows & More.</h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    Transmds is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandi
                                </p>
                                <div className="subscribe-price">
                                    <h3 className="price wow fadeInUp" data-wow-delay=".3s"><sub>$</sub>90 <span>/ 1 month</span></h3>
                                   <h4 className="wow fadeInUp" data-wow-delay=".5s">Subscribed & get 1month WIFi Free</h4>
                                </div>
                                <a href="about.html" className="theme-btn theme-btn-2 wow fadeInUp" data-wow-delay=".7s"><span>Cheak availibilty <i className="fas fa-chevron-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Counter Section Start  */}
        <section className="counter-section-2">
            <div className="container">
                <div className="counter-wrapper-2">
                    <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                        <div className="content">
                            <h2><span className="count">50</span>k+</h2>
                            <p>Project Complete</p>
                        </div>
                    </div>
                    <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                        <div className="content">
                            <h2><span className="count">5</span>k+</h2>
                            <p>Project Complete</p>
                        </div>
                    </div>
                    <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                        <div className="content">
                            <h2><span className="count">3</span>k+</h2>
                            <p>Satisficed Clients</p>
                        </div>
                    </div>
                    <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                        <div className="content">
                            <h2><span className="count">85</span>+</h2>
                            <p>Awards Winning</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

          {/* Grow Section Start  */}
        <section className="grow-section section-padding section-bg-3">
            <div className="container">
                <div className="grow-wrapper">
                    <div className="title-section-area">
                        <div className="section-title style-2">
                            <span className="text-white wow fadeInUp">Business strategy we need</span>
                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                GROW COMMUNITY & EXPERIENCE <br/>
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
                            </div>
                            <div className="content">
                                <h6>
                                    Business Strategy
                                </h6>
                                <p>
                                    End to end fiber optic cable <br/>
                                    nnectivity for stable
                                </p>
                            </div>
                        </div>
                        <div className="single-circle-bar wow fadeInUp" data-wow-delay=".5s">
                            <div className="circle-bar" data-percent="77" data-duration="1000">
                            </div>
                            <div className="content">
                                <h6>
                                    Gaurateed Uptime
                                </h6>
                                <p>
                                    End to end fiber optic cable <br/>
                                    nnectivity for stable
                                </p>
                            </div>
                        </div>
                        <div className="single-circle-bar wow fadeInUp" data-wow-delay=".7s">
                            <div className="circle-bar" data-percent="85" data-duration="1000">
                            </div>
                            <div className="content">
                                <h6>
                                    Proactive Monitoring
                                </h6>
                                <p>
                                    End to end fiber optic cable <br/>
                                    nnectivity for stable
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       {/* Testimonial Section Start  */}
        <section className="testimonial-section-3 fix section-padding pt-0">
            <div className="container-fluid">
                <div className="testimonial-wrapper-3">
                    <div className="testimonial-carousel-active-3">
                        <div className="testimonial-items">
                            <div className="testimonial-image-area">
                                <div className="testimonial-image bg-cover" style={{backgroundImage: "url('assets/img/testimonial/06.jpg')"}}>
                                    <div className="icon">
                                        <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.1964 1.98168C30.9987 3.96415 32.08 6.12685 32.08 9.73134C32.08 16.0392 27.5744 21.6262 21.2665 24.5098L19.6445 22.1668C25.5919 18.9228 26.8535 14.7776 27.2139 12.0743C26.3128 12.6149 25.0513 12.7952 23.7897 12.6149C20.5456 12.2545 18.0225 9.73134 18.0225 6.30707C18.0225 4.68505 18.7434 3.06303 19.8247 1.80146C21.0863 0.539885 22.5281 -0.000789642 24.3304 -0.000789642C26.3128 -0.000789642 28.1151 0.900331 29.1964 1.98168ZM11.1739 1.98168C12.9762 3.96415 14.0575 6.12685 14.0575 9.73134C14.0575 16.0392 9.55192 21.6262 3.24406 24.5098L1.62204 22.1668C7.56945 18.9228 8.83102 14.7776 9.19147 12.0743C8.29035 12.6149 7.02878 12.7952 5.7672 12.6149C2.52316 12.2545 1.52588e-05 9.73134 1.52588e-05 6.30707C1.52588e-05 4.68505 0.720913 3.06303 1.80226 1.80146C2.88361 0.539885 4.50563 -0.000789642 6.30788 -0.000789642C8.29035 -0.000789642 10.0926 0.900331 11.1739 1.98168Z" fill="#ff1749"/>
                                        </svg>                                            
                                    </div>
                                </div>
                                <div className="star">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <h3>
                                    Climb the mountain not to plant your flag but to embrace
                                    the ways challenge, enjoy the air, and behold the. Climb it
                                    see the world, not so the world can see you. This is due to their excellent service competitive pricing
                                </h3>
                                <div className="athor-name">
                                    <h4>Robert J. Hare/</h4>
                                    <p>Graphics Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-items">
                            <div className="testimonial-image-area">
                                <div className="testimonial-image bg-cover" style="background-image: url('assets/img/testimonial/07.jpg');">
                                    <div className="icon">
                                        <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.1964 1.98168C30.9987 3.96415 32.08 6.12685 32.08 9.73134C32.08 16.0392 27.5744 21.6262 21.2665 24.5098L19.6445 22.1668C25.5919 18.9228 26.8535 14.7776 27.2139 12.0743C26.3128 12.6149 25.0513 12.7952 23.7897 12.6149C20.5456 12.2545 18.0225 9.73134 18.0225 6.30707C18.0225 4.68505 18.7434 3.06303 19.8247 1.80146C21.0863 0.539885 22.5281 -0.000789642 24.3304 -0.000789642C26.3128 -0.000789642 28.1151 0.900331 29.1964 1.98168ZM11.1739 1.98168C12.9762 3.96415 14.0575 6.12685 14.0575 9.73134C14.0575 16.0392 9.55192 21.6262 3.24406 24.5098L1.62204 22.1668C7.56945 18.9228 8.83102 14.7776 9.19147 12.0743C8.29035 12.6149 7.02878 12.7952 5.7672 12.6149C2.52316 12.2545 1.52588e-05 9.73134 1.52588e-05 6.30707C1.52588e-05 4.68505 0.720913 3.06303 1.80226 1.80146C2.88361 0.539885 4.50563 -0.000789642 6.30788 -0.000789642C8.29035 -0.000789642 10.0926 0.900331 11.1739 1.98168Z" fill="#ff1749"/>
                                        </svg>             
                                    </div>
                                </div>
                                <div className="star">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <h3>
                                    Climb the mountain not to plant your flag but to embrace
                                    the ways challenge, enjoy the air, and behold the. Climb it
                                    see the world, not so the world can see you. This is due to their excellent service competitive pricing
                                </h3>
                                <div className="athor-name">
                                    <h4>Robert J. Hare/</h4>
                                    <p>Graphics Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-items">
                            <div className="testimonial-image-area">
                                <div className="testimonial-image bg-cover" style="background-image: url('assets/img/testimonial/08.jpg');">
                                    <div className="icon">
                                        <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.1964 1.98168C30.9987 3.96415 32.08 6.12685 32.08 9.73134C32.08 16.0392 27.5744 21.6262 21.2665 24.5098L19.6445 22.1668C25.5919 18.9228 26.8535 14.7776 27.2139 12.0743C26.3128 12.6149 25.0513 12.7952 23.7897 12.6149C20.5456 12.2545 18.0225 9.73134 18.0225 6.30707C18.0225 4.68505 18.7434 3.06303 19.8247 1.80146C21.0863 0.539885 22.5281 -0.000789642 24.3304 -0.000789642C26.3128 -0.000789642 28.1151 0.900331 29.1964 1.98168ZM11.1739 1.98168C12.9762 3.96415 14.0575 6.12685 14.0575 9.73134C14.0575 16.0392 9.55192 21.6262 3.24406 24.5098L1.62204 22.1668C7.56945 18.9228 8.83102 14.7776 9.19147 12.0743C8.29035 12.6149 7.02878 12.7952 5.7672 12.6149C2.52316 12.2545 1.52588e-05 9.73134 1.52588e-05 6.30707C1.52588e-05 4.68505 0.720913 3.06303 1.80226 1.80146C2.88361 0.539885 4.50563 -0.000789642 6.30788 -0.000789642C8.29035 -0.000789642 10.0926 0.900331 11.1739 1.98168Z" fill="#ff1749"/>
                                        </svg>             
                                    </div>
                                </div>
                                <div className="star">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <h3>
                                    Climb the mountain not to plant your flag but to embrace
                                    the ways challenge, enjoy the air, and behold the. Climb it
                                    see the world, not so the world can see you. This is due to their excellent service competitive pricing
                                </h3>
                                <div className="athor-name">
                                    <h4>Robert J. Hare/</h4>
                                    <p>Graphics Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-items">
                            <div className="testimonial-image-area">
                                <div className="testimonial-image bg-cover" style="background-image: url('assets/img/testimonial/09.jpg');">
                                    <div className="icon">
                                        <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.1964 1.98168C30.9987 3.96415 32.08 6.12685 32.08 9.73134C32.08 16.0392 27.5744 21.6262 21.2665 24.5098L19.6445 22.1668C25.5919 18.9228 26.8535 14.7776 27.2139 12.0743C26.3128 12.6149 25.0513 12.7952 23.7897 12.6149C20.5456 12.2545 18.0225 9.73134 18.0225 6.30707C18.0225 4.68505 18.7434 3.06303 19.8247 1.80146C21.0863 0.539885 22.5281 -0.000789642 24.3304 -0.000789642C26.3128 -0.000789642 28.1151 0.900331 29.1964 1.98168ZM11.1739 1.98168C12.9762 3.96415 14.0575 6.12685 14.0575 9.73134C14.0575 16.0392 9.55192 21.6262 3.24406 24.5098L1.62204 22.1668C7.56945 18.9228 8.83102 14.7776 9.19147 12.0743C8.29035 12.6149 7.02878 12.7952 5.7672 12.6149C2.52316 12.2545 1.52588e-05 9.73134 1.52588e-05 6.30707C1.52588e-05 4.68505 0.720913 3.06303 1.80226 1.80146C2.88361 0.539885 4.50563 -0.000789642 6.30788 -0.000789642C8.29035 -0.000789642 10.0926 0.900331 11.1739 1.98168Z" fill="#ff1749"/>
                                        </svg>             
                                    </div>
                                </div>
                                <div className="star">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <h3>
                                    Climb the mountain not to plant your flag but to embrace
                                    the ways challenge, enjoy the air, and behold the. Climb it
                                    see the world, not so the world can see you. This is due to their excellent service competitive pricing
                                </h3>
                                <div className="athor-name">
                                    <h4>Robert J. Hare/</h4>
                                    <p>Graphics Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-button">
                        <div className="testimonial-nav-prev"><i className="fas fa-chevron-left"></i></div>
                        <div className="testimonial-nav-next"><i className="fas fa-chevron-right"></i></div>
                    </div>
                </div>
            </div>
        </section>

                {/* Team Section Start  */}
        <section className="team-section section-padding pt-0 section-bg-3">
            <div className="dot-shape-2">
                <img src="assets/img/team/dot-shape-2.png" alt="shape-img"/>
            </div>
            <div className="container">
                <div className="section-title style-2 text-center">
                    <span className="wow fadeInUp">IT Support Help</span>
                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                        We’ve Exclusive real <br/>
                        Team member
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="team-card-items">
                            <div className="team-content">
                                <h4>
                                    <a href="team-details.html">Tommie J. Saruman</a>
                                </h4>
                                <p>Senior Consultant</p>
                            </div>
                            <div className="team-image">
                                <img src="assets/img/team/07.jpg" alt="team-img"/>
                                <div className="social-profile">
                                    <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="team-card-items active">
                            <div className="team-content">
                                <h4>
                                    <a href="team-details.html">Jackson Saruman</a>
                                </h4>
                                <p>Senior Development</p>
                            </div>
                            <div className="team-image">
                                <img src="assets/img/team/08.jpg" alt="team-img"/>
                                <div className="social-profile">
                                    <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="team-card-items">
                            <div className="team-content">
                                <h4>
                                    <a href="team-details.html">Wesley 
                                     Colton</a>
                                </h4>
                                <p>Senior Developer</p>
                            </div>
                            <div className="team-image">
                                <img src="assets/img/team/09.jpg" alt="team-img"/>
                                <div className="social-profile">
                                    <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                        <div className="team-card-items">
                            <div className="team-content">
                                <h4>
                                    <a href="team-details.html">David Suarez</a>
                                </h4>
                                <p>Team Leader</p>
                            </div>
                            <div className="team-image">
                                <img src="assets/img/team/10.jpg" alt="team-img"/>
                                <div className="social-profile">
                                    <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-button text-center mt-5 wow fadeInUp" data-wow-delay=".4s">
                    <a href="team.html" className="theme-btn theme-btn-2 hover-white">
                        <span>
                            Explore more team
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </section> 

        {/* Feature Video Section Start  */}
        <section className="feature-video-section fix section-padding bg-cover" style="background-image: url('assets/img/video_bg.jpg');">
            <div className="container">
                <div className="feature-video-wrapper">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            <div className="feature-video-content">
                                <div className="section-title mb-0">
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Experience The Features Magic of Netfix
                                    </h2>
                                </div>
                                <p className="mt-4 wow fadeInUp" data-wow-delay=".5s">
                                    Good Time is very good in what they're doing and
                                    more than happy to challenge and push you to
                                    think about your decisions both from usability and
                                    design standpoints.
                                </p>
                                <div className="counter-area">
                                    <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                                        <h4>
                                            <span className="count">4</span>k
                                        </h4>
                                        <p>Ultra HD Quality</p>
                                    </div>
                                    <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                                        <h4>
                                            <span className="count">90</span>+
                                        </h4>
                                        <p>Online TV Channels</p>
                                    </div>
                                    <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                                        <h4>
                                            <span className="count">350</span>+
                                        </h4>
                                        <p>Mbps Speed Internet</p>
                                    </div>
                                </div>
                                <a href="pricing.html" className="theme-btn theme-btn-2 wow fadeInUp" data-wow-delay=".3s"><span>Try Us Free <i className="fas fa-chevron-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            {/* Pricing Section Start  */}
        <section className="pricing-section-3 fix section-padding">
            <div className="container">
                <div className="section-title style-2 text-center">
                    <span className="wow fadeInUp">pricing plan</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Your Perfect Plans</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="pricing-card-items-2">
                            <ul className="pricing-icon">
                                <li className="icon">
                                    <i className="flaticon-wi-fi"></i>
                                </li>
                            </ul>
                            <div className="pricing-header">
                                <h5>Internet</h5>
                                <h2>
                                    <sub>$</sub>39.99 <span>/mo</span>
                                </h2>
                                <p>
                                    For 12 mos when bundled, <br/> + taxes & equip fee
                                </p>
                            </div>
                            <ul className="pricing-list">
                                <li>
                                    <i className="far fa-check"></i>
                                    Internet with a 1000 Mbps
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    Connect multiple users at once
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    Virus scanning & prevention
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    Internet with a 1000 Mbps
                                </li>
                            </ul>
                            <a href="contact.html" className="theme-btn theme-btn-2"><span>Choose Plan</span></a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="pricing-card-items-2 active">
                            <ul className="pricing-icon">
                                <li className="icon">
                                    <i className="flaticon-television-1"></i>
                                </li>
                            </ul>
                            <div className="pricing-header">
                                <h5>TV Box</h5>
                                <h2>
                                    <sub>$</sub>49.99 <span>/mo</span>
                                </h2>
                                <p>
                                    For 12 mos when bundled, <br/> + taxes & equip fee
                                </p>
                            </div>
                            <ul className="pricing-list">
                                <li>
                                    <i className="far fa-check"></i>
                                    Internet with a 1000 Mbps
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    Connect multiple users at once
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    Virus scanning & prevention
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    Internet with a 1000 Mbps
                                </li>
                            </ul>
                            <a href="contact.html" className="theme-btn theme-btn-2"><span>Choose Plan</span></a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="pricing-card-items-2">
                            <ul className="pricing-icon">
                                <li className="icon">
                                    <i className="flaticon-wi-fi"></i>
                                </li>
                                <li className="icon">
                                    <i className="flaticon-television-1"></i>
                                </li>
                            </ul>
                            <div className="pricing-header">
                                <h5>Internet + TV Box</h5>
                                <h2>
                                    <sub>$</sub>99.99 <span>/mo</span>
                                </h2>
                                <p>
                                    For 12 mos when bundled, <br/> + taxes & equip fee
                                </p>
                            </div>
                            <ul className="pricing-list">
                                <li>
                                    <i className="far fa-check"></i>
                                    Internet with a 1000 Mbps
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    Connect multiple users at once
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    Virus scanning & prevention
                                </li>
                                <li>
                                    <i className="far fa-check"></i>
                                    Internet with a 1000 Mbps
                                </li>
                            </ul>
                            <a href="contact.html" className="theme-btn theme-btn-2"><span>Choose Plan</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            {/* Product Section Start  */}
        <section className="product-section fix section-padding section-bg-2">
            <div className="container">
                <div className="title-section-area">
                    <div className="section-title">
                        <span className="wow fadeInUp">Top Sales</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Top Products</h2>
                    </div>
                    <a href="shop.html" className="theme-btn wow fadeInUp" data-wow-delay=".5s"><span>More Products <i className="fas fa-chevron-right"></i></span></a>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="product-card-items">
                            <div className="product-image">
                                <img src="assets/img/product/01.jpg" alt="img"/>
                                <div className="product-badge">
                                    <span className="product-badge-item">sale</span>
                                 </div>
                                <ul className="product-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </li>
                                    <li>
                                        <a href="shop-cart.html">
                                            <i className="far fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-content">
                                <h6>
                                    <a href="shop-details.html">Archer Router <br/> for Home</a>
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
                                <img src="assets/img/product/02.jpg" alt="img"/>
                                <div className="product-badge">
                                    <span className="product-badge-item">sale</span>
                                 </div>
                                <ul className="product-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </li>
                                    <li>
                                        <a href="shop-cart.html">
                                            <i className="far fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-content">
                                <h6>
                                    <a href="shop-details.html">Smart TV Box <br/> for Home</a>
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
                                <img src="assets/img/product/03.jpg" alt="img"/>
                                <div className="product-badge">
                                    <span className="product-badge-item">sale</span>
                                 </div>
                                <ul className="product-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </li>
                                    <li>
                                        <a href="shop-cart.html">
                                            <i className="far fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-content">
                                <h6>
                                    <a href="shop-details.html">Virtual Reality <br/> Helmet</a>
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
                                <img src="assets/img/product/04.jpg" alt="img"/>
                                <div className="product-badge">
                                    <span className="product-badge-item">sale</span>
                                 </div>
                                <ul className="product-icon d-grid justify-content-center align-items-center">
                                    <li>
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </li>
                                    <li>
                                        <a href="shop-cart.html">
                                            <i className="far fa-shopping-cart"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-details.html"><i className="far fa-eye"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-content">
                                <h6>
                                    <a href="shop-details.html">Camera Gear 360 <br/> for Home</a>
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

                {/* News Section Start  */}
        <section className="news-section section-padding fix">
            <div className="container">
                <div className="title-section-area">
                    <div className="section-title style-2">
                        <span className="wow fadeInUp">IT Support Help</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">Upcoming News & <span>Blog</span></h2>
                    </div>
                    <a href="news-details.html" className="theme-btn theme-btn-2 wow fadeInUp" data-wow-delay=".5s">
                        <span>
                            Explore Our news
                            <i className="fas fa-chevron-right"></i>
                        </span>
                     </a>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="single-news-items-2">
                            <div className="news-image bg-cover" style="background-image: url('assets/img/news/06.jpg');">
                                <div className="post-date">
                                    <h4>
                                        25 <br/>
                                        <span>Dec</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="news-content">
                                <p>Product Design</p>
                                <h4>
                                    <a href="news-details.html">
                                        Connecting at Scale for  Resilience <br/> & Inspiration
                                    </a>
                                </h4>
                                <a href="news-details.html" className="link-btn link-btn-2">
                                    <span>read more</span>
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="single-news-items-2">
                            <div className="news-image bg-cover" style="background-image: url('assets/img/news/07.jpg');">
                                <div className="post-date">
                                    <h4>
                                        28 <br/>
                                        <span>Dec</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="news-content">
                                <p>Product Design</p>
                                <h4>
                                    <a href="news-details.html">
                                        Kid-friendly Video Chat Apps To <br/> Keep Them Save
                                    </a>
                                </h4>
                                <a href="news-details.html" className="link-btn link-btn-2">
                                    <span>read more</span>
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="single-news-items-2">
                            <div className="news-image bg-cover" style="background-image: url('assets/img/news/08.jpg');">
                                <div className="post-date">
                                    <h4>
                                        30 <br/>
                                        <span>Dec</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="news-content">
                                <p>Product Design</p>
                                <h4>
                                    <a href="news-details.html">
                                        The effects of weather on Internet
                                        have concern since
                                    </a>
                                </h4>
                                <a href="news-details.html" className="link-btn link-btn-2">
                                    <span>read more</span>
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section Start  */}
        <section className="contact-section-2 fix section-padding bg-cover" style="background-image: url('assets/img/contact-bg.jpg');">
            <div className="contact-image">
                <img src="assets/img/contact-2.png" alt="contact-img"/>
            </div>
            <div className="container">
                <div className="contact-wrapper-2">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-content">
                                <div className="section-title style-2">
                                    <span className="wow fadeInUp">IT Support Help</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">let,s work together</h2>
                                </div>
                                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    We denounce with righteous indignation and like men <br/>
                                    beguiled and demoralized by the charms
                                </p>
                                <div className="contact-info-area">
                                    <div className="contact-info-items mb-4 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="icon">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div className="content">
                                            <p>Call For Inquiry</p>
                                            <h3><a href="tel:+23645689622">+236 (456) 896 22</a></h3>
                                        </div>
                                    </div>
                                    <div className="contact-info-items mb-4 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="icon">
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <div className="content">
                                            <p>Send Us Email</p>
                                            <h3><a href="mailto:info@example.com">info@example.com</a></h3>
                                        </div>
                                    </div>
                                    <div className="contact-info-items wow fadeInUp" data-wow-delay=".9s">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="content">
                                            <p>Location</p>
                                            <h3>734 H, Bryan Burlington, NC 27215 </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="contact-box">
                                <div className="contact-title">
                                    <h3 className="wow fadeInUp" data-wow-delay=".3s">Need Help For Project!</h3>
                                    <p className="wow fadeInUp" data-wow-delay=".5s">We are ready to help your next projects, let’s work together</p>
                                </div>
                                <div className="contact-form-items">
                                    <form action="#" id="contact-form" method="POST">
                                        <div className="row g-3">
                                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                                <div className="form-clt">
                                                    <input type="text" name="name" id="name" placeholder="Name"/>
                                                    <div className="icon">
                                                        <i className="far fa-user"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                                <div className="form-clt">
                                                    <input type="text" name="email" id="email" placeholder="Email"/>
                                                    <div className="icon">
                                                        <i className="far fa-envelope"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                                <div className="form-clt">
                                                    <div className="nice-select" tabindex="0">
                                                       <span className="current">
                                                         Choose Services
                                                       </span>
                                                       <ul className="list">
                                                          <li data-value="1" className="option selected focus">
                                                             Default sorting
                                                       </li>
                                                       <li data-value="1" className="option">
                                                          Sort by popularity
                                                       </li>
                                                       <li data-value="1" className="option">
                                                          Sort by average rating
                                                       </li>
                                                       <li data-value="1" className="option">
                                                          Sort by latest
                                                       </li>
                                                    </ul>
                                                    </div>
                                                 </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                                <div className="form-clt">
                                                    <textarea name="message" id="message" placeholder="Write Your Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                                                <button type="submit" className="theme-btn theme-btn-2">
                                                   <span>
                                                    Send Us Messages
                                                    <i className="fas fa-chevron-right"></i>
                                                   </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Brand Section Start  */}
        <div className="brand-section-5 section-padding">
            <div className="container">
                <h5 className="text-center pb-5">Trusted by the world’s best</h5>
                <div className="swiper brand-slider-2">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="brand-img center">
                                <img src="assets/img/brand/client-1.png" alt="img"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-img center">
                                <img src="assets/img/brand/client-2.png" alt="img"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-img center">
                                <img src="assets/img/brand/client-3.png" alt="img"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-img center">
                                <img src="assets/img/brand/client-4.png" alt="img"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-img center">
                                <img src="assets/img/brand/client-5.png" alt="img"/>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-img center">
                                <img src="assets/img/brand/client-6.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    <Footer />


        </Box>
    )
}


export default Home;