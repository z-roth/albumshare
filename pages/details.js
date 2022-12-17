import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { getAlbumByTitleAndArtist } from "../services/albums-service";
import AlbumDetails from "../components/album-details";

const Details = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [albumDetails, setAlbumDetails] = useState({});

  useEffect(() => {
    if (router.isReady) {
      getAlbumByTitleAndArtist(router.query.title, router.query.artist)
        .then((data) => {
          setAlbumDetails(data);
          setLoading(false);
        })
        .catch((err) => alert(err));
    }
  }, [router.query, router.isReady]);

  return (
    <Box>
      <Navbar />
      {!loading && albumDetails ? (
        <AlbumDetails album={albumDetails} />
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Details;
