import { Box, Typography, Button, CircularProgress } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../pages/_app";
import { getReviewsForAlbum } from "../services/reviews-service";
import ReviewCardInfo from "./review-card-info";
import { useRouter } from "next/router";

const AlbumDetails = ({ album }) => {
  const [reviews, setReviews] = useState();
  const [reviewsLoading, setReviewsLoading] = useState(true);

  const router = useRouter();
  const { user } = useContext(UserContext);
  const isLoggedIn = Object.keys(user).length != 0;

  useEffect(() => {
    getReviewsForAlbum(album.name, album.artist)
      .then((data) => {
        setReviews(data);
        setReviewsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [album.artist, album.name]);

  const handleReview = () => {
    router.push({
      pathname: "/create-review",
      query: {
        artist: album.artist,
        album: album.name,
        image: album.image[4][`#text`],
      },
    });
  };

  return (
    <Box sx={{ textAlign: "center", p: 8 }}>
      <Image
        src={album.image[4][`#text`]}
        width="255"
        height="255"
        alt={album.name}
      />
      <Typography variant="h2" sx={{ m: 2 }}>
        {album.name}
      </Typography>
      <Typography variant="h4" sx={{ m: 2 }}>
        {album.artist}
      </Typography>
      <Button
        variant="contained"
        disabled={!isLoggedIn}
        onClick={() => handleReview()}
      >
        {!isLoggedIn && "Sign in to "}Create Review
      </Button>
      <Typography variant="h5" sx={{ m: 2 }}>
        Reviews
      </Typography>
      {reviewsLoading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {reviews.map((review, idx) => (
            <ReviewCardInfo review={review} key={idx} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AlbumDetails;
