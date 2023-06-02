import { useEffect, useState } from "react";
import { getSingleReview } from "../utils";
import { SingleReviewInfo } from "./SingleReviewInfo";
import { Comments } from "./Comments";
import { useParams } from "react-router-dom";

export function SingleReviewContent({ user }) {
  const [individualReview, setIndividualReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    getSingleReview(review_id).then(({ review }) => {
      setIndividualReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="single-page-content">
      <h2 className="page-headings">{individualReview.owner}'s review</h2>
      <ul className="single-review-info-container">
        <SingleReviewInfo
          key={individualReview.review_id}
          category={individualReview.category}
          created_at={individualReview.created_at}
          designer={individualReview.designer}
          owner={individualReview.owner}
          review_body={individualReview.review_body}
          review_id={individualReview.review_id}
          review_img_url={individualReview.review_img_url}
          title={individualReview.title}
          votes={individualReview.votes}
          setIndividualReview={setIndividualReview}
        />
      </ul>
      <section>
        <Comments user={user} />
      </section>
    </main>
  );
}
