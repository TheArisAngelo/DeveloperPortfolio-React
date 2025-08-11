import React from "react";

export default function Education() {
  return (
    <>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5"> Education </h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Adamson University</h3>
              <div className="subheading mb-3">
                Bachelor of Science in Computer Engineering
              </div>
              <div>4 Year Course</div>
              <p>Passed All Subjects!</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                {" "}
                August 2018 - December 2024{" "}
              </span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">Paco Catholic School</h3>
              <div className="subheading mb-3">
                Science, Technology, Engineering & Mathematics
              </div>
              <p>Passed All Subjects!</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">August 2012 - March 2018 </span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}
