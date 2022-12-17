import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Navbar from "../components/navbar";
import ReviewsList from "../components/reviews-list";
import { useContext, useEffect } from "react";
import {
  getRecentReviews,
  getReviewsForUser,
} from "../services/reviews-service";
import { UserContext } from "./_app";
import { useQueries } from "react-query";
import {
  getPromotedAlbums,
  getPromotedAlbumsForUser,
} from "../services/albums-service";
import PromotedAlbumList from "../components/promoted-album-list";

const Home = () => {
  const { user } = useContext(UserContext);
  const isLoggedIn = Object.keys(user).length != 0;

  const queries = [
    { queryKey: ["reviews"], queryFn: getRecentReviews },
    { queryKey: ["promotedAlbums"], queryFn: getPromotedAlbums },
  ];

  if (isLoggedIn) {
    if (!user.isBandAccount) {
      queries.push({
        queryKey: ["reviews", user.username],
        queryFn: getReviewsForUser,
      });
    } else {
      queries.push({
        queryKey: ["albums", user.username],
        queryFn: getPromotedAlbumsForUser,
      });
    }
  }

  const queryResults = useQueries(queries);

  return (
    <Box>
      <Head></Head>
      <Navbar />
      <Box sx={{ p: 4 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Recent Reviews
        </Typography>
        {queryResults[0].isLoading ? (
          <CircularProgress />
        ) : (
          <ReviewsList reviews={queryResults[0].data} />
        )}
        {isLoggedIn &&
          (queryResults[2].isLoading ? (
            <CircularProgress />
          ) : user.isBandAccount ? (
            <>
              <Typography variant="h2" sx={{ mb: 2 }}>
                Your Promoted Albums
              </Typography>
              <PromotedAlbumList albums={queryResults[2].data} />
            </>
          ) : (
            <>
              <Typography variant="h2" sx={{ mb: 2 }}>
                Your Reviews
              </Typography>
              <ReviewsList reviews={queryResults[2].data} />
            </>
          ))}
        <Typography variant="h2" sx={{ mb: 2 }}>
          Promoted Albums
        </Typography>
        {queryResults[1].isLoading ? (
          <CircularProgress />
        ) : (
          <PromotedAlbumList albums={queryResults[1].data} />
        )}
      </Box>
    </Box>
  );
};

export default Home;
