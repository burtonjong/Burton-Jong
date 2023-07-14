/* eslint-disable react-hooks/exhaustive-deps */
import Title from "./Title";
import Links from "./Links";
import Experience from "./Experience";
import LoadingBar from "./LoadingBar";
import { useState, useEffect } from "react";

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);
  const [timer1, setTimer1] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimer1(!timer1);
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShowComponent(!showComponent);
    }, 5000);
  }, []);

  return (
    <div className="container-stay">
      <div
        className={"container-fade " + (showComponent ? "animate fade" : "")}
      >
        <div
          className={
            "profile-container " + (timer1 ? "animate fade slow-8" : "")
          }
        >
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
}
