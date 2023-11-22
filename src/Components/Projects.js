import ProjectShowcase from "./ProjectShowcase";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";

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
          keep track of friends who owe you, or who you owe money to. Front-end
          only, works on desktop.
        </ProjectShowcase>
        <ProjectShowcase
          name="Rankedify"
          picture={project2}
          link="https://www.linkedin.com/posts/burton-jong-849b35209_me-and-anthony-chans-largest-project-in-activity-7098839609391943680-g6BN?utm_source=share&utm_medium=member_desktop"
        >
          A solo project that showcases a personal ranking of music albums. This
          app is currently being developed with{" "}
          <span className="keywords">React</span> and{" "}
          <span className="keywords">React Router</span>. Currently submitted to
          Spotify for approval.
        </ProjectShowcase>
        <ProjectShowcase
          name="Sustainabite"
          picture={project3}
          link="https://devpost.com/software/sustainabite-gn74z9?ref_content=my-projects-tab&ref_feature=my_projects"
        >
          A group project that takes in a recipe and outputs more sustainable
          ingredients for that recipe. This app was created during the 2023 Hack
          the Change Hackathon and mainly used{" "}
          <span className="keywords">React</span> and{" "}
          <span className="keywords">OpenAI's</span> API.
        </ProjectShowcase>
      </div>
    </div>
  );
}
