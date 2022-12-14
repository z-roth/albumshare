import { Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { getAlbums } from "../api/album-api";
import SearchResults from "../components/search-results";

const Search = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState();

  useEffect(() => {
    if (router.isReady) {
      getAlbums(router.query.searchString)
        .then((data) => {
          setAlbums(data);
          setLoading(false);
        })
        .catch((err) => alert(err));
    }
  }, [router.query.searchString]);

  return (
    <Box>
      <Navbar />
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Box>
          {!loading && router.isReady ? (
            <SearchResults
              searchString={router.query.searchString}
              albums={albums}
            />
          ) : (
            <Typography variant="h4">Loading...</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
