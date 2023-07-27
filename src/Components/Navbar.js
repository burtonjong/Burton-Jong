/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import useScrollListener from "../hooks/useScrollListener";

export default function Navbar({ show }) {
  const [showNav, setShowNav] = useState(false);
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      _classList.push("nav-bar--hidden");
      if (showNav) {
        setShowNav(!showNav);
      }
    }

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY, showNav]);

  function handleClick() {
    setShowNav(!showNav);
  }

  function closeNav() {
    setShowNav(!showNav);
    setShowNav(!showNav);
  }

  return (
    <>
      <div className={"max-height max-width absolute"}>
        <div className="container-hamburger">
          <button
            className="nav-toggle "
            aria-controls="fixed-navbar"
            aria-expanded="false"
            onClick={handleClick}
          >
            <span className="sr-only">Menu</span>
          </button>
        </div>
        <nav className={"max-height " + navClassList.join(" ")}>
          <ul
            className={
              showNav
                ? "fixed-navbar flex max-height"
                : "fixed-navbar flex hide-nav notransition"
            }
          >
            <li className="navbar-item animate fade-down slow-3 zero">
              <a href="#home" className="nav-item" onClick={closeNav}>
                <span>
                  <span className="blu3">00</span> Home //
                </span>
              </a>
            </li>

            <li className="navbar-item animate fade-down slow-3 one">
              <a href="#expertise" className=" nav-item" onClick={closeNav}>
                <span>
                  <span className="blu3">01</span> Expertise //
                </span>
              </a>
            </li>
            <li className="navbar-item animate fade-down slow-3 two">
              <a href="#projects" className=" nav-item" onClick={closeNav}>
                <span>
                  <span className="blu3">02</span> Projects //
                </span>
              </a>
            </li>
            <li className="navbar-item animate fade-down slow-3 three">
              <a href="#contact" className=" nav-item" onClick={closeNav}>
                <span>
                  <span className="blu3">03</span> Contact //
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
