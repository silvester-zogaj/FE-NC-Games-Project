import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Categories{" "}
      </Link>
      <Link to="/reviews" className="nav-link">
        Reviews{" "}
      </Link>
    </nav>
  );
}

export default Nav;
