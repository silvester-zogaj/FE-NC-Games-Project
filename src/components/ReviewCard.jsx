export function ReviewCard({ review_id, owner, title, comment_count, votes }) {
  return (
    <li key={review_id} className="review-card">
      <h2 className="review-card-title">
        <em>{title}</em>
      </h2>
      <p className="review-card-username">USER: {owner}</p>
      <p className="review-card-comment_count">comments: {comment_count}</p>
      <p className="review-card-votes">votes: {votes}</p>
      <button className="review-card-btn">Go to review</button>
    </li>
  );
}
