import { Link } from "react-router-dom";

export function CategoryCard({ slug, description, setCategoryFilter }) {
  return (
    <Link to={`/${slug}`} className="category-links">
      <li key={slug} className="category-card">
        <h2 className="category-card-name">{slug}</h2>
        <p className="category-card-description">{description}</p>
      </li>
    </Link>
  );
}
