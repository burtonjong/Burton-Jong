/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  function handleClick() {
    setShowNav(!showNav);
  }

  return (
    <>
      <button
        className="nav-toggle "
        aria-controls="fixed-navbar"
        aria-expanded="false"
        onClick={handleClick}
      >
        <span className="sr-only">Menu</span>
      </button>
      <div>
        <nav>
          <ul
            className={
              showNav ? "fixed-navbar flex" : "fixed-navbar flex hide-nav"
            }
          >
            <li className="navbar-item ">
              <a
                href="www.google.com"
                className="animate fade-down slow-3 nav-item"
              >
                <span>00 Home //</span>
              </a>
            </li>

            <li className="navbar-item">
              <a
                href="www.google.com"
                className="animate fade-down slow-3 nav-item"
              >
                <span>01 Expertise //</span>
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="www.google.com"
                className="animate fade-down slow-3 nav-item"
              >
                <span>02 Projects //</span>
              </a>
            </li>
            <li className="navbar-item">
              <a
                href="www.google.com"
                className="animate fade-down slow-3 nav-item"
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
