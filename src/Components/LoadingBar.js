/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function LoadingBar() {
  const [showComponent, setShowComponent] = useState(false);
  const [timer1, setTimer1] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimer1(!timer1);
    }, 2000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShowComponent(!showComponent);
    }, 4000);
  }, []);

  return (
    <div className={"container-fade " + (showComponent ? "animate fade" : "")}>
      <div
        className={"profile-container " + (timer1 ? "animate fade slow-2" : "")}
      >
        <div className="loader"></div>
      </div>
    </div>
  );
}
