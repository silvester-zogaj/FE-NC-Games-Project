export function CommentCard({ comment_id, author, body, created_at, votes }) {
  return (
    <li key={comment_id} className="comment-card">
      <p className="comment-card-body">{body}</p>
      <p className="comment-card-author">{author}</p>
      <p className="comment-card-votes">Votes: {votes}</p>
      <p className="comment-card-date">Posted on: {created_at}</p>
    </li>
  );
}
