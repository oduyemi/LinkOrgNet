import React from 'react';

const FeatureIconBox = ({ iconClass, title, description, delay }) => (
    <div className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp`} data-wow-delay={delay}>
        <div className="icon-box-items">
            <div className="icon">
                <i className={iconClass}></i>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
);

const FeatureIconBoxSection = () => {
    return (
        <section className="feature-icon-box-area-2">
            <div className="container">
                <div className="feature-icon-box-wrapper">
                    <div className="row g-4">
                        <FeatureIconBox
                            iconClass="flaticon-database"
                            title="Voice Over Protocol"
                            description="Average time to resolve a cyber attack."
                            delay=".3s"
                        />
                        <FeatureIconBox
                            iconClass="flaticon-server"
                            title="Data Backup"
                            description="Average time to resolve a cyber attack."
                            delay=".5s"
                            active={true}
                        />
                        <FeatureIconBox
                            iconClass="flaticon-connection"
                            title="Fast Connected"
                            description="Average time to resolve a cyber attack."
                            delay=".7s"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureIconBoxSection;
