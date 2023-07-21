import Links from "./Links";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  return (
    <div
      className={"container-contact flex jc-center ai-center column"}
      ref={ref}
    >
      <div className={`${inView ? "hidden" : "show"}`}>
        <h1 className="title2">Contact me.</h1>
        <Links />
        <p className="ta-center">
          Written directly from scratch with <span>React.js</span> and deployed
          with <span>Vercel.</span>
        </p>
      </div>
    </div>
  );
}
