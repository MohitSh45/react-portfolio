/* 
   File: components/Services.js
   Author: Mohit Sharma
   Student ID: 301297059
   Date: January 28, 2024
*/
import React from "react";
import Card from "./Card";

import codingImage from "../assets/images/coding.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Full Stack Web Development",
      subTitle: "Web Development",
      description:
        "Building robust and scalable web applications from concept to deployment, incorporating the latest technologies.",
    },
    {
      id: 2,
      title: "Software Testing and QA",
      subTitle: "S/W Testing",
      description:
        "Ensuring the quality and reliability of software through comprehensive testing methodologies.",
    },
    {
      id: 3,
      title: "Database Management",
      subTitle: "Databases",
      description:
        "Designing, implementing, and managing databases to support efficient data storage and retrieval.",
    },
  ];
  return (
    <div className="container">
      <div className="text-center py-2">
        <h2>My Services</h2>
        <p>Discover the services I offer.</p>
      </div>

      <div className="row">
        <div className="col-md-7 order-md-2">
          <div className="grid gay-3">
            {services.map((service) => (
              <div className="mb-3">
                <Card
                  key={service.id}
                  icon={service.id}
                  title={service.title}
                  subTitle={service.subTitle}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src={codingImage}
            alt=""
            className="img-fluid w-100 rounded mb-2"
          />
          <p className="fw-bold italics text-primary">
            Ready to Transform Your Ideas into Reality?{" "}
            <em className="text-secondary fw-normal">
              Explore my services and let's build something amazing together.
            </em>
          </p>

          <div className="cta-buttons">
            <Link to="/projects" className="btn bg-primary text-accent">
              View Projects
            </Link>
            <Link to="/contact" className="btn bg-accent text-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
