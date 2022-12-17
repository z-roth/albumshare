import {
  Box,
  Modal,
  TextField,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { createReview } from "../services/reviews-service";
import { UserContext } from "./_app";
import { useRouter } from "next/router";

const CreateReview = () => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");

  const router = useRouter();
  const { user } = useContext(UserContext);
  const isLoggedIn = Object.keys(user).length != 0;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      username: user.username,
      album: router.query.album,
      artist: router.query.artist,
      image: router.query.image,
      rating,
      content,
    };
    createReview(newReview)
      .then(() => {
        router.push({
          pathname: "/details",
          query: { artist: router.query.artist, title: router.query.album },
        });
      })
      .catch((err) => alert(err));
  };

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Typography variant="h4">Create New Review</Typography>
        <TextField
          label="Review"
          multiline
          rows={3}
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <TextField
          label="Rating (out of 10)"
          type="number"
          min={0}
          max={10}
          InputLabelProps={{
            shrink: true,
          }}
          required
          onChange={(e) => setRating(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Submit Review
        </Button>
      </Box>
    </Box>
  );
};

export default CreateReview;
