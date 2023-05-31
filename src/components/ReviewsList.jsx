import { useState, useEffect } from "react";
import { getReviews } from "../utils";
import { ReviewCard } from "./ReviewCard";

function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main class="reviews-page">
      <h1 className="page-headings">All reviews</h1>
      <ul className="review-card-container">
        {reviews.map(({ review_id, owner, title, comment_count, votes }) => {
          return (
            <ReviewCard
              key={review_id}
              owner={owner}
              title={title}
              comment_count={comment_count}
              votes={votes}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ReviewsList;
