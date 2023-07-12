import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [activeCategory, setActiveCategory] = useState("nav-links-active");
  const [activeReviews, setActiveReviews] = useState("");

  const handleClick = (e) => {
    if (e.target.text === "Categories") {
      setActiveCategory("nav-links-active");
      setActiveReviews("");
    } else if (e.target.text === "Reviews") {
      setActiveReviews("nav-links-active");
      setActiveCategory("");
    }
  };
  return (
    <nav className="nav-links-container">
      <Link
        to="/"
        onClick={handleClick}
        className={`nav-links ${activeCategory}`}
      >
        Categories
      </Link>
      <Link
        to="/reviews"
        onClick={handleClick}
        className={`nav-links ${activeReviews}`}
      >
        Reviews
      </Link>
    </nav>
  );
}

export default Nav;
