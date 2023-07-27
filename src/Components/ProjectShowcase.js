import project1 from "../images/project1.png";
import { useInView } from "react-intersection-observer";

export default function ProjectShowcase() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div
      className={`image-box flex container-project ${
        inView ? "hidden1" : "show1"
      }`}
      ref={ref}
    >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://burtonjong.github.io/BillSplit/"
      >
        <div className="image-box">
          <img
            className="project-image responsive "
            src={project1}
            alt="eat-n-split project"
          />
        </div>
      </a>

      <div className="project-description">
        <p className="high">BillSplit</p>
        <p className="project-text">
          This app was created with <span className="keywords">React</span> to
          keep track of friends who owe you, or who you owe money to.
        </p>
      </div>
    </div>
  );
}
