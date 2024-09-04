import React from 'react';
import Advisor from "../../assets/images/advisor.jpg"

const NeedAdvisor = () => {
    return (
        <section 
            className="bg-cover section-padding" 
            style={{ backgroundImage: `url(${Advisor})` }}
        >
            <div className="container">
                <div className="cta-banner-wrapper section-padding pt-0">
                    <div className="section-title mb-0">
                        <span className="wow fadeInUp">5m+ Trusted Our Clients</span>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            Need It advisor For your business? <br />
                            Please Call: 
                            <a href="tel:123884400" className="theme-color-1">(123) 884400</a>
                        </h2>
                    </div>
                    <a href="/contact" className="theme-btn hover-white wow fadeInUp" data-wow-delay=".5s">
                        <span>
                            Get a Free Quote
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NeedAdvisor;
