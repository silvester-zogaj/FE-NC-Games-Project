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

export const patchReviewUpVote = (review_id) => {
  return ncGamesApi.patch(`/reviews/${review_id}`, { inc_votes: 1 });
};

export const patchReviewDownVote = (review_id) => {
  return ncGamesApi.patch(`/reviews/${review_id}`, { inc_votes: -1 });
};

export const postReviewComment = (review_id, newComment) => {
  return ncGamesApi
    .post(`/reviews/${review_id}/comments`, newComment)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteReviewComment = (comment_id) => {
  return ncGamesApi.delete(`/comments/${comment_id}`);
};

export const getCategories = () => {
  return ncGamesApi
    .get(`/categories`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const firstEightChars = (word) => {
  const regex = /^........../g;
  const newWord = word.match(regex);
  return newWord;
};
