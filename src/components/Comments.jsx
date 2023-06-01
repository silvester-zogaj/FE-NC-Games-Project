import { getReviewComments } from "../utils";

export function Comments({ reviewId }) {
  getReviewComments(reviewId).then(({ comments }) => {
    console.log(comments);
  });
  return <main></main>;
}
