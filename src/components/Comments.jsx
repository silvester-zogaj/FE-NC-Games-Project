import { getReviewComments, postReviewComment } from "../utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentCard } from "./CommentCard";

export function Comments({ user }) {
  const [reviewComments, setReviewComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const { review_id } = useParams();

  useEffect(() => {
    getReviewComments(review_id).then(({ comments }) => {
      setReviewComments(comments);
    });
  }, [review_id]);

  const handleChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleSubmit = (event) => {
    const newComment = {};
    event.preventDefault();

    // postReviewComment(review_id, newComment).then(({comment}) => {
    //   console.log
    // });

    newComment.author = user.username;
    console.log(newComment);
  };

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

      <form id="post-comment-form" onSubmit={handleSubmit}>
        <label htmlFor="post-comment-input"></label>
        <textarea
          id="post-comment-input"
          required
          onChange={handleChange}
          value={commentInput}
        />
        <button type="submit" className="post-comment-btn">
          Post your comment
        </button>
      </form>
    </main>
  );
}
