import ProjectShowcase from "./ProjectShowcase";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";

export default function Projects() {
  return (
    <div className="container-projects flex column ai-center">
      <div className="flex column">
        {" "}
        <h1 className="title3">My Projects.</h1>
        <h2 className="small-title3">
          Currently focused on web applications using{" "}
          <span className="keywords">React.</span>
        </h2>
      </div>

      <div className="container-showcase flex wrap jc-center column">
        <ProjectShowcase
          name="BillSplit"
          picture={project1}
          link="https://burtonjong.github.io/BillSplit/"
        >
          This app was created with <span className="keywords">React</span> to
          keep track of friends who owe you, or who you owe money to.
        </ProjectShowcase>
        <ProjectShowcase
          name="Rankedify"
          picture={project2}
          link="https://www.linkedin.com/posts/burton-jong-849b35209_me-and-anthony-chans-largest-project-in-activity-7098839609391943680-g6BN?utm_source=share&utm_medium=member_desktop"
        >
          A group project that showcases a personal ranking of music albums.
          This app is currently being developed with{" "}
          <span className="keywords">React</span> and{" "}
          <span className="keywords">React Router</span>. We are currently
          deciding on a backend.
        </ProjectShowcase>
      </div>
    </div>
  );
}
