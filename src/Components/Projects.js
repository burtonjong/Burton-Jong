import ProjectShowcase from "./ProjectShowcase";

export default function Projects() {
  return (
    <div className="container-projects flex column ai-center">
      <h1 className="title3">My Projects.</h1>
      <div className="container-showcase flex wrap jc-center">
        <ProjectShowcase />
      </div>
    </div>
  );
}
