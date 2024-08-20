import React from 'react';

const CounterSection = () => {
  return (
    <section className="counter-section-2">
      <div className="container">
        <div className="counter-wrapper">
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
              <p>Satisfied Clients</p>
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
  );
};

export default CounterSection;
