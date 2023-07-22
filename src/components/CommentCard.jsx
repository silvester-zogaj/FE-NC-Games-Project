import { useEffect } from "react";
import { deleteReviewComment } from "../utils";
import { useParams } from "react-router-dom";

export function CommentCard({
  comment_id,
  author,
  body,
  created_at,
  votes,
  user,
  setReviewComments,
}) {
  const handleClick = () => {
    deleteReviewComment(comment_id).then(() => {
      setReviewComments((currReviewComments) => {
        const copyReviewComments = [...currReviewComments];
        const matchComment = copyReviewComments.find((comments) => {
          return comment_id === comments.comment_id;
        });
        const commentIndex = copyReviewComments.indexOf(matchComment);
        copyReviewComments.splice(commentIndex, 1);
        return copyReviewComments;
      });
    });
  };
  return (
    <li key={comment_id} className="comment-card">
      <p className="comment-card-body">{body}</p>
      <p className="comment-card-author">{author}</p>
      <div className="comment-card-lower-container">
        <p className="comment-card-votes">Votes: {votes}</p>
        <p className="comment-card-date">Posted on: {created_at}</p>
        {user.username === author ? (
          <button className="comment-card-del-btn" onClick={handleClick}>
            Delete comment
          </button>
        ) : (
          <></>
        )}
      </div>
    </li>
  );
}
