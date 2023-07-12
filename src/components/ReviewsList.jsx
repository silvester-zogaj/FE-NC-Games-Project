import { useState, useEffect } from "react";
import { getReviews } from "../utils";
import { ReviewCard } from "./ReviewCard";

function ReviewsList({ setReviewId }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <main className="reviews-page">
      <h2 className="page-headings">All reviews</h2>
      <ul className="review-card-container">
        {reviews.map(({ review_id, owner, title, comment_count, votes }) => {
          return (
            <ReviewCard
              key={review_id}
              owner={owner}
              title={title}
              comment_count={comment_count}
              votes={votes}
              review_id={review_id}
              setReviewId={setReviewId}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ReviewsList;
