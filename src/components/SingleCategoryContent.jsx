import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategories, getReviews } from "../utils";
import { CategoryRevCard } from "./CategoryRevCard";

export function SingleCategoryContent({ categories, setReviewId }) {
  const [individualCategory, setIndividualCategory] = useState({});
  const [categoryReviews, setCategoryReviews] = useState([]);
  const { category_name } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories().then(({ categories }) => {
      const singleCategory = categories.filter((category) => {
        return category.slug === category_name;
      });
      setIndividualCategory(...singleCategory);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      const filteredReviews = reviews.filter((review) => {
        return review.category === category_name;
      });
      setCategoryReviews(filteredReviews);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <section>
        <h2>{individualCategory.slug}</h2>
        <p>{individualCategory.description}</p>
      </section>
      <h3>More reviews of this genre</h3>
      <ul className="review-card-container">
        {categoryReviews.map(
          ({ review_id, owner, title, comment_count, votes }) => {
            return (
              <CategoryRevCard
                key={review_id}
                owner={owner}
                title={title}
                comment_count={comment_count}
                votes={votes}
                review_id={review_id}
                setReviewId={setReviewId}
              />
            );
          }
        )}
      </ul>
    </main>
  );
}