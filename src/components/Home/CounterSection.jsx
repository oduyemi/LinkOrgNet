import React from 'react';

const CounterSection = () => {
  return (
    <section className="counter-section-2" style={{marginTop: "50px"}}>
      <div className="container">
        <div className="counter-wrapper">
          <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
            <div className="content">
              <h2><span className="count">VSAT</span> Internet</h2>
              <p> on IDirect Dedicated Services</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
            <div className="content">
              <h2><span className="count">Phone</span> Services</h2>
              <p> Dedicated Landline for Business</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
            <div className="content">
              <h2><span className="count">VPN</span>Services</h2>
              <p> Stay safe online comfortably</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
            <div className="content">
              <h2><span className="count">Offshore Platforms</span>+</h2>
              <p>Fixed and stabilized antennae.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
