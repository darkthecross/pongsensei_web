import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark px-4 fixed-top">
        <Link className="navbar-brand" to="/">PongSensei</Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wiki">Wiki</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/demo_1">Demo_1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/demo_2">Demo_2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/demo_3">Demo_3</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
};

export default Navbar;
