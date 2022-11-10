import "./NavBar.scss";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link className="link-nav" to="/homepage">
          <div className="nav-container__home">
            <h3>HOME</h3>
          </div>
        </Link>
        <Link className="link-nav" to="/discover">
          <div className="nav-container__discover">
            <h3>DISCOVER</h3>
          </div>
        </Link>
      </div>
    </nav>
  );
}
