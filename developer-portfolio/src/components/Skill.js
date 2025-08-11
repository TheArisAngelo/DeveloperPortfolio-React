import React from "react";

export default function Skill() {
  return (
    <>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5"> Skills </h2>
          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm" />
            </li>
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}
