/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  function handleClick() {
    setShowNav(!showNav);
  }

  function closeNav() {
    setShowNav(!showNav);
    setShowNav(!showNav);
  }

  return (
    <>
      <div className={showNav ? "circle fixed" : "circle"}>
        <button
          className="nav-toggle "
          aria-controls="fixed-navbar"
          aria-expanded="false"
          onClick={handleClick}
        >
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <div>
        <nav>
          <ul
            className={
              showNav ? "fixed-navbar flex" : "fixed-navbar flex hide-nav"
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
