import { useInView } from "react-intersection-observer";

export default function LanguageBox({ image, children }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      className={`language-box flex centered column glass ${
        inView ? "animate fade-up" : ""
      }`}
      ref={ref}
    >
      <div className={"logo " + image}></div>
      <p>{children}</p>
    </div>
  );
}
