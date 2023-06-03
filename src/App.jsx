import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Nav from "./components/Nav";
import ReviewsList from "./components/ReviewsList";
import CategoriesList from "./components/CategoriesList";
import { SingleReviewContent } from "./components/SingleReviewContent";
import { SingleCategoryContent } from "./components/SingleCategoryContent";

function App() {
  const [user, setUser] = useState({
    username: "grumpy19",
    name: "Paul Grump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
  });

  const [reviewId, setReviewId] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");

  return (
    <BrowserRouter>
      <main>
        <Header />
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <CategoriesList
                categories={categories}
                setCategories={setCategories}
                setCategoryFilter={setCategoryFilter}
              />
            }
          />
          <Route
            path="/:category_name"
            element={
              <SingleCategoryContent
                categories={categories}
                setReviewId={setReviewId}
              />
            }
          />
          <Route
            path="/reviews"
            element={<ReviewsList setReviewId={setReviewId} />}
          />
          <Route
            path="/reviews/:review_id"
            element={<SingleReviewContent user={user} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
