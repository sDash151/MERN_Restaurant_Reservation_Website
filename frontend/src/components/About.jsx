import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="aboutText">
    Welcome to <strong>Sourav's Café</strong> – where flavor meets comfort. 
    Nestled in the heart of the city, we’re more than just a restaurant — 
    we’re a culinary experience crafted with passion, tradition, and a dash of modern creativity.
  </p>
  <p className="aboutText">
    Our mission is simple: to serve delicious, wholesome meals made from fresh, locally sourced ingredients. 
    From hearty breakfasts to savory lunches and unforgettable dinners, every dish is prepared with care by our talented chefs.
  </p>
  <p className="aboutText">
    Whether you’re here for a quick bite, a cozy meal with loved ones, or a celebration, 
    Sourav’s Café promises an inviting ambiance, attentive service, and flavors you’ll keep coming back for.
  </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
