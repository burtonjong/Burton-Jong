import project1 from "../images/project1.png";
import { useInView } from "react-intersection-observer";

export default function ProjectShowcase() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div
      className={`flex container-project ${inView ? "hidden1" : "show1"}`}
      ref={ref}
    >
      <img
        className="project-image responsive "
        src={project1}
        alt="eat-n-split project"
      />
      <div className="project-description">
        <p className="project-text">
          This app was created with react to keep track of friends who owe you,
          or who you owe money to.
        </p>
      </div>
    </div>
  );
}
