
import React from "react";

import image from "../images/pexels-tima-miroshnichenko-9572568.jpg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "UI Design for BrandShark",
    description:
      "I designed a user interface for BrandShark, a company focused on innovative branding solutions. The goal was to create a visually appealing and user-friendly platform that enhances the brand's identity while providing a seamless experience for users.",
    url: "https://github.com/mehul825/Brandsharkfrontend-_webdvp",
  },
  {
    title: "GitHub Repository Listing Page",
    description:
      "Developed a dynamic web application that allows users to browse, search, and filter GitHub repositories, enhancing the experience of discovering and contributing to open-source projects.",
    url: "https://github.com/mehul825/github_repositories_listing_page",
  },
  {
    title: "User Authentication System",
    description:
      "Developed a secure user authentication system that allows users to register, log in, and manage their profiles. This project showcases my skills in implementing security best practices while enhancing user experience.",
    url: "https://github.com/mehul825/user-authentication-system",
  },
  {
    title: "Library Management System",
    description:
      "Developed a comprehensive Library Management System designed to streamline the management of library resources, including books, members, and transactions. This project enhances user experience and improves operational efficiency for library staff and patrons.",
    url: "https://github.com/mehul825/Library_management_system",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
