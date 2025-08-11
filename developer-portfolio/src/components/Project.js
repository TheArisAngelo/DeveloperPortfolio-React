import React from "react";

export default function Project() {
  return (
    <>
      <section className="resume-section" id="projects">
        <div className="resume-section-content projects">
          <h2 className="mb-1"> Projects </h2>
          <div className="subheading mb-2"> Frontend Projects </div>
          <div className="d-flex row">
            <div
              className="card col-md-3 col-12 mx-2 mb-1"
              style={{ width: "14rem" }}
            >
              <img
                className="card-img-top"
                src="img/SnakeGame.png"
                alt="Snake Game"
              />
              <div className="card-body">
                <h5 className="card-title"> Snake Game React </h5>
                <a
                  href="https://github.com/TheArisAngelo/SnakeGame-React.git"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>
            <div
              className="card col-md-3 col-12 mx-2 mb-1"
              style={{ width: "16rem" }}
            >
              <img
                className="card-img-top"
                src="img/DinosaurGame.png"
                alt="Dinosaur Game"
              />
              <div className="card-body">
                <h5 className="card-title"> Dinosaur Game </h5>
                <a
                  href="https://github.com/TheArisAngelo/DinosaurGame-React.git"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="resume-section" id="interests">
        <div className="resume-section-content">
          <h2 className="mb-5"> Interests </h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. On weekdays I go for walks daily.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring blogger, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}
