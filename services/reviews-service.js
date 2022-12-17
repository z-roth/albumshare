import axios from "axios";
import {
  getReviewsRoute,
  getReviewsForUserRoute,
  getReviewsForAlbumRoute,
  createReviewRoute,
  deleteReviewRoute,
  updateReviewRoute,
} from "./routes";

const getRecentReviews = async () => {
  const response = await axios.get(getReviewsRoute());
  return response.data;
};

const getReviewsForUser = async ({ queryKey }) => {
  const [_, username] = queryKey;
  const response = await axios.get(getReviewsForUserRoute(username));
  return response.data;
};

const getReviewsForAlbum = async (albumTitle, albumArtist) => {
  const response = await axios.get(
    getReviewsForAlbumRoute(albumTitle, albumArtist)
  );
  return response.data;
};

const createReview = async (review) => {
  const response = await axios.post(createReviewRoute(), review);
  return response.data;
};

const deleteReview = async (rid) => {
  const response = await axios.delete(deleteReviewRoute(rid));
  return response.data;
};

export {
  getRecentReviews,
  getReviewsForUser,
  getReviewsForAlbum,
  createReview,
  deleteReview,
};
