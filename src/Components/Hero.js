import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>Backroads App</h1>
          <p>
            Explore breathtaking destinations, unforgettable experiences, and
            carefully curated tours designed to make every journey memorable.
          </p>
          <a href="#tours" className="btn hero-btn">
            explore tours
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero
