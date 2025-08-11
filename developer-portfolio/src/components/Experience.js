import React from "react";

export default function Experience() {
  return (
    <>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5"> Experiences </h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0"> Junior Front-end Web Developer </h3>
              <div className="subheading mb-3">
                {" "}
                Silver Goose 8 International{" "}
              </div>
              <p>
                Checking and Implementing new ideas for Websites that SG8 is
                handling. Debugging and using our skills to implement these new
                ideas that we have, it makes the website more user friendly and
                has seamless integration.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary"> March 2025 - Present </span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0"> Junior Web Developer </h3>
              <div className="subheading mb-3"> LFC </div>
              <p>
                Debugging and Fixing Websites using PHP. oordinated with
                design team and product owners for inclusion of various features
                in order to improve brand reach across various platforms.
              </p>
            </div>
            <div className="flex-shrink-0">
                <span className="text-primary"> January 2025 - March 2025</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}
