import React from "react";
import { Link } from "react-router-dom";
import codingImage from "../assets/images/coding.jpg";

const Home = () => {
  return (
    <div className="hero py-3">
      <div className="hero-content">
        <span className="hero-subtitle">Building Tomorrow's Solutions</span>
        <h1 className="hero-title">Mohit Sharma</h1>
        <p className="hero-description">
          A passionate full-stack web developer. I specialize in creating robust
          and scalable web applications using the latest technologies.
        </p>
        <div className="d-flex flex-start gap-2 hero-btns">
          <Link
            to={"/about"}
            className="btn bg-primary text-accent rounded px-3 py-2"
          >
            About Me
          </Link>
          <a
            href={"/Mohit_SHARMA_Resume_Jan24.docx"}
            download={"Mohit SHARMA Resume Jan24.docx"}
            className="btn bg-accent text-secondary rounded"
          >
            My Resume
          </a>
        </div>
        <p className="hero-mission mt-3 small">
          My mission as a Full Stack Web Developer is to bring ideas to life
          through seamless and impactful web experiences.
        </p>
      </div>
      <img className="hero-image" src={codingImage} alt="" />
    </div>
  );
};

export default Home;
