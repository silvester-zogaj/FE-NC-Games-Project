import { Link } from "react-router-dom";

export function SingleReviewInfo({
  category,
  created_at,
  designer,
  owner,
  review_body,
  review_id,
  review_img_url,
  title,
  votes,
}) {
  return (
    <li key="{review_id}" className="single-review-card">
      <h3>
        <em>{title}</em>
      </h3>
      <p>Category: {category}</p>
      <p>"{review_body}"</p>
      <img src={review_img_url} alt={title} className="single-review-img" />
      <p className="single-review-votes">Votes: {votes}</p>
      <p className="single-review-designer">Game designer: {designer}</p>
      <p className="single-review-date">Posted on: {created_at}</p>
      <Link to="/reviews" className="nav-link">
        <button className="single-review-btn">Go back to all reviews</button>
      </Link>
    </li>
  );
}
