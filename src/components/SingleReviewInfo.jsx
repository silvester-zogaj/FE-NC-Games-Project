import { Link } from "react-router-dom";
import {
  patchReviewUpVote,
  patchReviewDownVote,
  firstEightChars,
} from "../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function SingleReviewInfo({
  category,
  created_at,
  designer,
  review_body,
  review_img_url,
  title,
  votes,
  setIndividualReview,
}) {
  const { review_id } = useParams();
  const [err, setErr] = useState(false);

  const upVote = (id) => {
    setIndividualReview((currIndividualReview) => {
      return { ...currIndividualReview, votes: votes + 1 };
    });

    patchReviewUpVote(id).catch((err) => {
      setErr(true);
      console.log(err.response.data);
      setIndividualReview((currIndividualReview) => {
        return currIndividualReview;
      });
    });
  };

  const downVote = (id) => {
    setIndividualReview((currIndividualReview) => {
      return { ...currIndividualReview, votes: votes - 1 };
    });

    patchReviewDownVote(id).catch((err) => {
      setErr(true);
      console.log(err.response.data);
      setIndividualReview((currIndividualReview) => {
        return currIndividualReview;
      });
    });
  };

  return (
    <li key="{review_id}" className="single-review-card">
      <h3 className="single-review-title">
        <em>{title}</em>
      </h3>
      <p className="single-review-category">Category: {category}</p>
      <p className="single-review-body">"{review_body}"</p>
      <img src={review_img_url} alt="{title} " className="single-review-img" />
      <p className="single-review-designer">Game designer: {designer}</p>
      <section className="single-review-votes">
        {err ? (
          <p className="vote-error-msg">Error! Your vote did not go through.</p>
        ) : (
          <>
            <button
              className="thumbs thumbs-up"
              onClick={() => {
                upVote(review_id);
              }}
            >
              👍
            </button>
            <p>{votes}</p>
            <button
              className="thumbs thumbs-down"
              onClick={() => {
                downVote(review_id);
              }}
            >
              👎
            </button>
          </>
        )}
      </section>

      <p className="single-review-date">
        Posted on: {firstEightChars(created_at)}
      </p>
      <Link to="/reviews" className="nav-link">
        <button className="single-review-btn">View all reviews</button>
      </Link>
    </li>
  );
}
