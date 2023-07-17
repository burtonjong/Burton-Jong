/* eslint-disable react/jsx-no-comment-textnodes */
export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="fixed-navbar flex">
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
    </>
  );
}
