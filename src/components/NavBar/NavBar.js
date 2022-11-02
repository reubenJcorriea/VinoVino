import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-container__home">
          <h3>HOME</h3>
        </div>
        <div className="nav-container__about">
          <h3>ABOUT</h3>
        </div>
        <div className="nav-container__discover">
          <h3>DISCOVER</h3>
        </div>
      </div>
    </nav>
  );
}
