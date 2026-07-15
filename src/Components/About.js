import React from 'react'
import aboutImg from '../images/about.jpeg';
import Title from './Title';
const About = () => {
  return (
    <div>
      <section className="section" id="about">
        <Title title="about" subTitle="us" />

        <div className="section-center about-center">
          <div className="about-img">
            <img src={aboutImg} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              At Backroads, we believe every journey should be more than just a
              trip. We create carefully planned travel experiences that combine
              adventure, comfort, and unforgettable destinations for travelers
              of all kinds.
            </p>
            <p>
              Whether you're seeking breathtaking landscapes, cultural
              discoveries, or relaxing getaways, our expert team is dedicated to
              helping you explore the world with confidence and create memories
              that last a lifetime.
            </p>
            <a href="#Aboutus" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}

export default About
