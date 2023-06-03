import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function SingleCategoryContent({ categories }) {
  const [individualCategory, setIndividualCategory] = useState({});
  const { category_name } = useParams();

  const pollo = categories.filter((category) => {
    return category.slug === category_name;
  });

  useEffect(() => {
    setIndividualCategory(pollo);
  }, []);

  console.log(individualCategory);
  return (
    <main>
      <section></section>
    </main>
  );
}
