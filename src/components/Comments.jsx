import {
  getReviewComments,
  postReviewComment,
  deleteReviewComment,
} from "../utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentCard } from "./CommentCard";

export function Comments({ user }) {
  const [reviewComments, setReviewComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [waitAfterPost, setWaitAfterPost] = useState(false);
  const [err, setErr] = useState(false);
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
    event.preventDefault();
    setWaitAfterPost(true);

    const newComment = {};
    newComment.username = user.username;
    newComment.body = commentInput;

    postReviewComment(review_id, newComment)
      .then(({ comment }) => {
        setReviewComments((currReviewComments) => {
          setWaitAfterPost(false);
          return [...currReviewComments, comment];
        });
      })
      .catch((err) => {
        setErr(true);
      });

    setCommentInput("");
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
                user={user}
                comment_id={comment_id}
                setReviewComments={setReviewComments}
              />
            );
          }
        )}
      </ul>

      <form id="post-comment-form" onSubmit={handleSubmit}>
        <label htmlFor="post-comment-input"></label>
        <textarea
          id="post-comment-input"
          maxLength="100"
          required
          onChange={handleChange}
          value={commentInput}
        />
        {err ? (
          <p>You are currently offline</p>
        ) : waitAfterPost ? (
          <section>
            <p>Comment posted!</p>
            <button type="button" className="post-comment-btn-wait">
              Post comment
            </button>
          </section>
        ) : (
          <button type="submit" className="post-comment-btn">
            Post comment
          </button>
        )}
      </form>
    </main>
  );
}
