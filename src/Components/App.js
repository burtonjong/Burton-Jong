/* eslint-disable react-hooks/exhaustive-deps */
import Home from "./Home";
import Expertise from "./Expertise";
import Contact from "./Contact";
import Projects from "./Projects";

import { useState, useEffect } from "react";

export default function App() {
  const [waitForAnimation, setWaitForAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setWaitForAnimation(!waitForAnimation);
      console.log(waitForAnimation);
    }, 7200);
  }, []);

  return (
    <div>
      <section id="Home">
        <Home />
      </section>
      {waitForAnimation && (
        <>
          <section id="Expertise">
            <Expertise />
          </section>
          <section id="Projects">
            <Projects />
          </section>
          <section id="Contact">
            <Contact />
          </section>
        </>
      )}
    </div>
  );
}
