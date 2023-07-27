import ProjectShowcase from "./ProjectShowcase";

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

      <div className="container-showcase flex wrap jc-center">
        <ProjectShowcase />
      </div>
    </div>
  );
}
