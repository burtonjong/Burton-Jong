/* eslint-disable react/jsx-no-comment-textnodes */
export default function Navbar() {
  return (
    <div class="fixed-navbar">
      <ul>
        <a href="www.google.com">
          <li className="navbar-item animate fade-down slow-3">// Home //</li>
        </a>
        <a href="www.google.com">
          <li className="navbar-item animate fade-down slow-3">
            // Expertise //
          </li>
        </a>
        <a href="www.google.com">
          <li className="navbar-item animate fade-down slow-3">
            // Projects //
          </li>
        </a>
        <a href="www.google.com">
          <li className="navbar-item animate fade-down slow-3">
            // Contact //
          </li>
        </a>
      </ul>
    </div>
  );
}
