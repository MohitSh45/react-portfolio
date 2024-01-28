import React from "react";

import mainProjectImage from "../assets/images/web-development.jpg";
import eCommerceImage from "../assets/images/e-commerce.jpg";
import codingImage from "../assets/images/coding.jpg";

const Projects = () => {
  const mainProject = {
    title: "H.K. Computers Website Development",
    description:
      "Designed website interfaces, integrated back-end services, and maintained web applications.",
    highlights: [
      "Integrated back-end services with Core PHP, JavaScript, JQuery.",
      "Created admin panels for managing website updates.",
      "Optimized performance of the website.",
    ],
    imageUrl: mainProjectImage,
  };
  const projects = [
    {
      title: "Chicken Good eCommerce Website",
      description:
        "Developed an online system for finding the best eggs in the market.",
      highlights: [
        "User account creation and product browsing functionality.",
        "Admin section for administrators to make changes.",
        "Comprehensive testing to ensure optimized user experience.",
      ],
      imageUrl: eCommerceImage,
    },
    {
      title: "Slashcode Software Pvt. Ltd. Projects",
      description:
        "Contributed to various web development projects as a Full Stack Developer.",
      highlights: [
        "Worked with Laravel and MySQL for designing, developing, and debugging web applications.",
        "Collaboration with a team to optimize and customize multiple web applications.",
        "Creation and maintenance of technical documentation.",
      ],
      imageUrl: codingImage,
    },
  ];
  return (
    <div className="container">
      <div className="text-center py-2">
        <h2>My Projects</h2>
        <p>Discover the projects have done or contributed to so far.</p>
      </div>

      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="main-project card bg-transparent">
            <img
              className={"card-img-top"}
              src={mainProject.imageUrl}
              alt={mainProject.title}
            />
            <div className="card-body">
              <h5 className="card-title">{mainProject.title}</h5>
              <p className="card-text">{mainProject.description}</p>
              <ul className="list-group list-group-numbered list-group-flush bg-transparent">
                {mainProject.highlights.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item border-none bg-transparent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          {projects.map((project, index) => (
            <div className="card bg-transparent mb-4" key={index}>
              <div className="row g-0">
                <div className="col-md-5">
                  <img
                    className="card-img img-fluid h-100"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <ul className="list-group list-group-numbered list-group-flush bg-transparent">
                      {project.highlights.map((item, index) => (
                        <li
                          key={index}
                          className="list-group-item border-none bg-transparent"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
