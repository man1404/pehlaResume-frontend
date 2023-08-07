import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >Menu
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul className="ullu">
          <div className="webd">
            <li>
              <a href="/">pehlaresume.com</a>
            </li>
          </div>

          <div className="anotherDiv">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/Signup">Signup</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
