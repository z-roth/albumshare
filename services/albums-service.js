import axios from "axios";
import {
  getAlbumsRoute,
  getAlbumByTitleAndArtistRoute,
  getPromotedAlbumsRoute,
  getPromotedAlbumsForUserRoute,
  createPromotedAlbumRoute,
  deletePromotedAlbumRoute
} from "./routes";

const getAlbums = async (albumTitle) => {
  const response = await axios.get(getAlbumsRoute(albumTitle));
  return response.data;
};

const getAlbumByTitleAndArtist = async (albumTitle, albumArtist) => {
  const response = await axios.get(
    getAlbumByTitleAndArtistRoute(albumTitle, albumArtist)
  );
  return response.data;
};

const getPromotedAlbums = async () => {
  const response = await axios.get(getPromotedAlbumsRoute);
  return response.data;
};

const getPromotedAlbumsForUser = async ({ queryKey }) => {
  const [_, username] = queryKey;
  const response = await axios.get(getPromotedAlbumsForUserRoute(username));
  return response.data;
};

const createPromotedAlbum = async (album) => {
  const response = await axios.post(createPromotedAlbumRoute, album);
  return response.data;
};

const deletePromotedAlbum = async (pid) => {
  const response = await axios.delete(deletePromotedAlbumRoute(pid));
  return response.data;
};

export {
  getAlbums,
  getAlbumByTitleAndArtist,
  getPromotedAlbums,
  getPromotedAlbumsForUser,
  createPromotedAlbum,
  deletePromotedAlbum,
};
