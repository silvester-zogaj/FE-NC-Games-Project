import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: `https://nc-games-h6ji.onrender.com/api`,
});

export const getReviews = () => {
  return ncGamesApi.get("/reviews").then((response) => {
    return response.data;
  });
};
