import LanguageBox from "./LanguageBox";
import { useInView } from "react-intersection-observer";
import profile from "../images/profile2.jpg";

export default function Expertise() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="container-expertise flex column jc-center">
      <div className="container-languages">
        <h1 className={`title2`} ref={ref}>
          About Me.
        </h1>
        <div className="two3">
          <div className="flex column two2">
            <img src={profile} alt="line" className="profile-pic" />
          </div>
          <div className="flex column two2 maxw">
            <h3 className="small-title3 ">
              Although I love coding, I also enjoy playing volleyball, hiking,
              skiing, and, of course, eating. I’m also involved in school clubs
              like{" "}
              <span className="keywords">
                <a href="https://www.codethechangeyyc.ca/" alt="CTC Link">
                  Code the Change
                </a>
              </span>{" "}
              and the{" "}
              <span className="keywords">
                <a href="https://calgarysolarcar.ca/" alt="Solar Car Link">
                  UCalgary Solar Car
                </a>
              </span>{" "}
              team working on full stack projects using{" "}
              <span className="keywords ">TypeScript</span> and{" "}
              <span className="keywords">AWS</span>. This summer, I’m also doing{" "}
              <span className="keywords">undergraduate research</span> to see if
              superficial features like implementation affect the attribution of
              code to different programmers. Feel free to reach out to me on{" "}
              <span className="keywords" id="scrollToBottom">
                <a href="#contact">social media</a>
              </span>{" "}
              if you have any questions!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
