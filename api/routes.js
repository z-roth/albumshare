const baseRoute = "http://127.0.0.1:4000/api"; //process.env.BACKEND_API || "localhost:4000/api";

console.log("Base Route", baseRoute);

const formatString = (string) => {
  return string.split(" ").join("+");
};

const getAlbumsRoute = (albumTitle) =>
  baseRoute + `/search/${formatString(albumTitle)}`;

const getAlbumByTitleAndArtistRoute = (albumTitle, albumArtist) =>
  baseRoute + `/${formatString(albumArtist)}/${albumTitle}`;

export { getAlbumsRoute, getAlbumByTitleAndArtistRoute };
