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
        <div className="circle">
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
            <li className="navbar-item ">
              <a
                href="#home"
                className="animate fade-down slow-3 nav-item"
                onClick={closeNav}
              >
                <span>00 Home //</span>
              </a>
            </li>

            <li className="navbar-item">
              <a
                href="#expertise"
                className="animate fade-down slow-3 nav-item"
                onClick={closeNav}
              >
                <span>01 Expertise //</span>
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="#projects"
                className="animate fade-down slow-3 nav-item"
                onClick={closeNav}
              >
                <span>02 Projects //</span>
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="#contact"
                className="animate fade-down slow-3 nav-item"
                onClick={closeNav}
              >
                <span>03 Contact //</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
