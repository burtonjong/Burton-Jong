import LanguageBox from "./LanguageBox";
import { useInView } from "react-intersection-observer";

export default function Expertise() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div className="container-expertise flex column jc-center">
      <div className="container-languages flex column">
        <div className="flex column">
          <h1 className={`title2 `} ref={ref}>
            My Expertise.
          </h1>
          <h2 className="small-title3">
            My current focus is learning advanced{" "}
            <span className="keywords">React.</span>
          </h2>
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
    </div>
  );
}
