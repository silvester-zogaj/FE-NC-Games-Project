import { useEffect, useState } from "react";
import { getCategories } from "../utils";
import { CategoryCard } from "./CategoryCard";

function CategoriesList({ categories, setCategories, setCategoryFilter }) {
 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories().then(({ categories }) => {
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="categories-page">
      <h1 className="page-headings">All categories</h1>
      <ul className="category-card-container">
        {categories.map(({ slug, description }) => {
          return (
            <CategoryCard
              key={slug}
              slug={slug}
              description={description}
              setCategoryFilter={setCategoryFilter}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default CategoriesList;
