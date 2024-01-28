import React from "react";
import me from "../assets/images/me.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about container">
      <div className="row py-3">
        <div className="col-md-6 mb-3">
          <div className="h-100 w-100 d-flex justify-content-center align-items-center">
            <img src={me} alt="" className="profile-pic img-fluid h-100" />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <h1 className="text-secondary">About Me</h1>
          <h3 className="text-primary fw-bold">Full Stack Web Developer</h3>
          <p>
            Greetings! I'm <strong>Mohit Sharma</strong>, a dedicated Full Stack
            Developer. Currently I'm a student of software engineering,
            specializing in Health Informatics Technology and holds a Bachelor
            of Information Technology degree.
          </p>

          <ul className="list-unstyled">
            <li>
              <strong>Name: </strong>
              <span>Mohit Sharma</span>
            </li>
            <li>
              <strong>Email: </strong>
              <span>mshar234@my.centennialcollege.ca</span>
            </li>
            <li>
              <strong>Phone: </strong>
              <span>416-276-4534 </span>
            </li>
            <li>
              <strong>Address: </strong>
              <span>4286A Lawrence Avenue East, Scarborough, ON M1E 2S7</span>
            </li>
          </ul>

          <Link
            to={"/services"}
            className="btn bg-primary text-accent rounded px-3 py-2"
          >
            Services
          </Link>
        </div>
      </div>

      <div className="grid text-center gap-3">
        <h3>Technical Skills</h3>
        <div className="d-flex justify-content-center align-items-center">
          <ul className="list-inline text-center">
            <li className="list-inline-item px-4 py-2 bg-secondary text-accent rounded mb-2">
              HTML, CSS, JavaScript, Java, React, SQL, .NET
            </li>
            <li className="list-inline-item px-4 py-2 bg-secondary text-accent rounded mb-2">
              Kamino, Nautilus, Trulio, Quip
            </li>
            <li className="list-inline-item px-4 py-2 bg-secondary text-accent rounded mb-2">
              Windows, Oracle, Linux, Unix
            </li>
            <li className="list-inline-item px-4 py-2 bg-secondary text-accent rounded mb-2">
              GitHub, Trello, Visio, Visual Studio Code, MS Office
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
