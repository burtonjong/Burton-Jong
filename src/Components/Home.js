/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "./Navbar";
import LoadingBar from "./LoadingBar";
import { useState, useEffect } from "react";

export default function Home() {
  const [timer2, setTimer2] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimer2(!timer2);
    }, 5500);
  }, []);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      // Get the new Value
      currentScrollPosition = window.scrollY;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <>
      <div className="container-stay">
        {timer2 && <LoadingBar />}

        {!timer2 && (
          <>
            <Navbar className={show} />
            <div className="container-home">
              <div className="container-title">
                <h1 className="animate fade-up slow-1 highlight">
                  BURTON JONG
                </h1>
                <div className="container-content">
                  <h2 className="animate fade-up slow-2">
                    I am a second year student in the{" "}
                    <span className="keywords">
                      Shulich School of Engineering
                    </span>{" "}
                    pursuing my Bachelor's in{" "}
                    <span className="keywords">Software Engineering</span>.
                  </h2>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
