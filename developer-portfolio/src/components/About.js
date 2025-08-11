import React from "react";

export default function About() {
  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            TheArisAngelo
            <span className="text-primary"></span>
          </h1>
          <div className="subheading mb-5">Front-end Web Developer - Don</div>
          <p className="lead mb-5">
            I am a Junior Front-end Web Developer at Silver Goose 8
            International! I’m currently building my skills in HTML, CSS, and
            JavaScript, and exploring frameworks like React. I enjoy turning
            ideas into functional and visually appealing web pages while
            continuously learning new tools and best practices.
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/aris-angelo-don-florentino-100599313"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="social-icon" href="https://github.com/TheArisAngelo">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
