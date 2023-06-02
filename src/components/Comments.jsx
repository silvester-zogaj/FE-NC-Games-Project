import { getReviewComments } from "../utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentCard } from "./CommentCard";

export function Comments() {
  const [reviewComments, setReviewComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getReviewComments(review_id).then(({ comments }) => {
      setReviewComments(comments);
    });
  }, [review_id]);

  return (
    <main>
      <h2 className="comments-heading">COMMENTS</h2>
      <ul className="comment-card-container">
        {reviewComments.map(
          ({ comment_id, author, body, created_at, votes }) => {
            return (
              <CommentCard
                key={comment_id}
                author={author}
                body={body}
                created_at={created_at}
                votes={votes}
              />
            );
          }
        )}
      </ul>

      <form id="post-comment-form">
        <label htmlFor="post-comment-input"></label>
        <textarea id="post-comment-input" minLength={900} />
        <button type="text required" className="post-comment-btn">
          Post your comment
        </button>
      </form>
    </main>
  );
}
