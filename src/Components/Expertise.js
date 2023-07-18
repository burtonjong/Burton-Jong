import LanguageBox from "./LanguageBox";

export default function Expertise() {
  return (
    <div className="container-expertise flex row jc-center" id="half-vh">
      <div className="container-languages flex  column">
        <div className="expertise-title flex centered">
          <h2>My Expertise</h2>
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

// HTML, CSS, JS, REACT, C, C++, NODE, GIT
