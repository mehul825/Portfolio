

import React from "react";


import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I’m a detail-oriented professional currently working as a Data Collector with a background in Web Development. I have hands-on experience in creating responsive websites using HTML, CSS, JavaScript, and React.js, and a strong interest in both Web Development and Data Analysis. I’m passionate about learning new technologies, solving problems, and building data-driven digital solutions."

;

const skillsList = [
  "Web design",
  "User experience",
  "API Development",
  "Data Analysis",
  "Adaptability",
  "Research and Testing",
];

const detailOrQuote =
 "I’m driven by a passion for creative problem-solving and innovation. With experience in Web Development and Data Analysis, I aim to design and build data-driven, user-friendly, and accessible digital solutions that make a meaningful impact.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
