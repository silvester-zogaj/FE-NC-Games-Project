import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: `https://nc-games-h6ji.onrender.com/api`,
});

export const getReviews = () => {
  return ncGamesApi
    .get("/reviews")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSingleReview = (review_id) => {
  return ncGamesApi
    .get(`/reviews/${review_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getReviewComments = (review_id) => {
  return ncGamesApi
    .get(`/reviews/${review_id}/comments`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
