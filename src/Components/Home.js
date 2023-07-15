/* eslint-disable react-hooks/exhaustive-deps */
import Title from "./Title";
import Links from "./Links";
import Experience from "./Experience";
import LoadingBar from "./LoadingBar";
import { useState, useEffect } from "react";

export default function Home() {
  const [timer2, setTimer2] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTimer2(!timer2);
    }, 5500);
  }, []);
  return (
    <div className="container-stay">
      {timer2 && <LoadingBar />}
      {!timer2 && (
        <div className="container-home">
          <div className="container-title">
            <h1 className="animate fade-up slow-1">BURTON JONG</h1>
            <div className="container-content">
              <h2 className="animate fade-up slow-2">
                I am a second year student in the{" "}
                <span className="keywords">Shulich School of Engineering</span>{" "}
                pursuing my Bachelor's in{" "}
                <span className="keywords">Software Engineering</span>.
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
