import { Link } from "react-router-dom";

export function ReviewCard({
  review_id,
  owner,
  title,
  comment_count,
  votes,
  setReviewId,
}) {
  return (
    <li key={review_id} className="review-card">
      <h3 className="review-card-title">
        <em>{title}</em>
      </h3>
      <p className="review-card-username">USER: {owner}</p>
      <p className="review-card-comment_count">comments: {comment_count}</p>
      <p className="review-card-votes">votes: {votes}</p>
      <Link to={`/reviews/${review_id}`} className="nav-link">
        <button
          className="review-card-btn"
          onClick={() => {
            setReviewId(review_id);
          }}
        >
          Go to review
        </button>
      </Link>
    </li>
  );
}
