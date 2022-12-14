import axios from "axios";
import { getAlbumsRoute, getAlbumByTitleAndArtistRoute } from "./routes";

const getAlbums = (albumTitle) => {
  return axios
    .get(getAlbumsRoute(albumTitle))
    .then((response) => response.data);
};

const getAlbumByTitleAndArtist = (albumTitle, albumArtist) => {
  return axios.get(getAlbumByTitleAndArtistRoute(albumTitle, albumArtist));
};

export { getAlbums };
