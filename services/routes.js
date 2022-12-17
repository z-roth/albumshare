const baseRoute = process.env.BACKEND_API || "http://127.0.0.1:4000/api";

// Album Related Routes
const baseAlbumsRoute = baseRoute + "/albums";

const getAlbumsRoute = (albumTitle) =>
  baseAlbumsRoute + `/search/${albumTitle}`;

const getAlbumByTitleAndArtistRoute = (albumTitle, albumArtist) =>
  baseAlbumsRoute + `/lastfm/${albumArtist}/${albumTitle}`;

const getPromotedAlbumsRoute = baseAlbumsRoute + "/promoted";

const getPromotedAlbumsForUserRoute = (username) =>
  getPromotedAlbumsRoute + `/${username}`;

const createPromotedAlbumRoute = baseAlbumsRoute + "/promoted";

const deletePromotedAlbumRoute = (pid) => baseAlbumsRoute + `/promoted/${pid}`;

// Review Related Routes

const reviewsBaseRoute = baseRoute + `/reviews`;

const getReviewsRoute = () => reviewsBaseRoute;

const getReviewsForUserRoute = (username) => reviewsBaseRoute + `/${username}`;

const getReviewsForAlbumRoute = (albumTitle, albumArtist) =>
  reviewsBaseRoute + `/${albumArtist}/${albumTitle}`;

const createReviewRoute = () => reviewsBaseRoute;

const deleteReviewRoute = (rid) => reviewsBaseRoute + `/${rid}`;

// User Related Routes

const userBaseRoute = baseRoute + "/users";

const signupRoute = userBaseRoute + "/signup";

const loginRoute = userBaseRoute + "/login";

const getUserByUsernameRoute = (username) => userBaseRoute + `/${username}`;

const updateUserRoute = (username) => userBaseRoute + `/${username}`;

export {
  getAlbumsRoute,
  getAlbumByTitleAndArtistRoute,
  getPromotedAlbumsRoute,
  getPromotedAlbumsForUserRoute,
  getReviewsRoute,
  getReviewsForAlbumRoute,
  getReviewsForUserRoute,
  getUserByUsernameRoute,
  createReviewRoute,
  createPromotedAlbumRoute,
  updateUserRoute,
  deleteReviewRoute,
  deletePromotedAlbumRoute,
  signupRoute,
  loginRoute,
};
