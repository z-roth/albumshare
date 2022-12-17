import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  ButtonBase,
  Grid,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../pages/_app";
import { deleteReview } from "../services/reviews-service";
import { useQueryClient } from "react-query";
import { deletePromotedAlbum } from "../services/albums-service";

const ReviewDetails = ({ review }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { user } = useContext(UserContext);

  const handleClick = () => {
    router.push({
      pathname: "/details",
      query: { artist: review.artist, title: review.album },
    });
  };

  const handleDelete = () => {
    deleteReview(review._id)
      .then(queryClient.invalidateQueries("reviews"))
      .catch((err) => alert("Error deleting review."));
  };

  return (
    <Card
      sx={{
        m: 2,
        me: 0,
        maxWidth: "500px",
        display: "flex",
      }}
    >
      <ButtonBase onClick={() => handleClick()}>
        <CardMedia
          component="img"
          image={review.image}
          sx={{ height: "200px", width: "200px" }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6">
            <b>{review.content}</b>
          </Typography>
          <Typography variant="h5" color="primary">
            <b>{review.rating}/10</b>
          </Typography>
          <Typography>
            <i>
              {review.artist} - {review.album}
            </i>
          </Typography>
          <Link href={`/profile/${review.username}`}>
            <Typography color="primary">@{review.username}</Typography>
          </Link>
        </CardContent>
      </ButtonBase>
      {review.username == user.username && (
        <IconButton color="error" onClick={() => handleDelete()}>
          <ClearIcon />
        </IconButton>
      )}
    </Card>
  );
};

export default ReviewDetails;
