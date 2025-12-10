

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";


import image from "../images/pexels-cottonbro-5483064.jpg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div className="home-content">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div className="scroll-down">
        <img src={arrowSvg} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
