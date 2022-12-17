import { Typography, Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { getAlbums } from "../services/albums-service";
import SearchResults from "../components/search-results";

const Search = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState();

  useEffect(() => {
    if (router.isReady && router.query.criteria) {
      getAlbums(router.query.criteria)
        .then((data) => {
          setAlbums(data);
          setLoading(false);
        })
        .catch((err) => alert(err));
    }
  }, [router.query.criteria, router.isReady]);

  return (
    <Box>
      <Navbar />
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Box>
          {!loading && router.isReady ? (
            <SearchResults criteria={router.query.criteria} albums={albums} />
          ) : router.query.criteria ? (
            <CircularProgress />
          ) : (
            <Typography variant="h4">
              Search for an album with the above search box.
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
