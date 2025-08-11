import "./styles.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Award from "./components/Award";

function App() {
  return (
  <>
    <div id="page-top">
      <Navigation />
      <div className="container-fluid p-0">
        <About />
        <Experience />
        <Education />
        <Skill />
        <Project />
        <Award />
      </div>
    </div>
  </>
  );
}

export default App;
