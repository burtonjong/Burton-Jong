import { useInView } from "react-intersection-observer";

export default function ProjectShowcase({ children, name, picture, link }) {
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
      <a target="_blank" rel="noreferrer" href={link}>
        <div className="image-box">
          <img
            className="project-image responsive "
            src={picture}
            alt="eat-n-split project"
          />
        </div>
      </a>

      <div className="project-description">
        <p className="high">{name}</p>
        <p className="project-text">{children}</p>
      </div>
    </div>
  );
}
