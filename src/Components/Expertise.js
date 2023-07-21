import LanguageBox from "./LanguageBox";
import { useInView } from "react-intersection-observer";

export default function Expertise() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div className="container-expertise flex column">
      <div className="container-languages flex column">
        <div className="expertise-title flex centered">
          <h1 className={`title2 ${inView ? "hidden" : "show"}`} ref={ref}>
            My Expertise.
          </h1>
        </div>
        <div className="container-box flex row jc-center wrap">
          {" "}
          <LanguageBox image={"html"}>HTML</LanguageBox>
          <LanguageBox image={"css"}>CSS</LanguageBox>
          <LanguageBox image={"js"}>JavaScript</LanguageBox>
          <LanguageBox image={"react"}>React</LanguageBox>
          <LanguageBox image={"node"}>NodeJS</LanguageBox>
          <LanguageBox image={"git"}>Git</LanguageBox>
          <LanguageBox image={"c"}>C</LanguageBox>
          <LanguageBox image={"cpp"}>C++</LanguageBox>
        </div>
      </div>
      <div className="information flex jc-center ai-center"></div>
    </div>
  );
}

// HTML, CSS, JS, REACT, C, C++, NODE, GIT
