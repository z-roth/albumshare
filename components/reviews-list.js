import { Box, Typography } from "@mui/material";
import ReviewCard from "./review-card";

const ReviewsList = ({ reviews }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {reviews.length === 0 ? (
        <Typography>No reviews to show at this time.</Typography>
      ) : (
        reviews.map((review, idx) => <ReviewCard review={review} key={idx} />)
      )}
    </Box>
  );
};

export default ReviewsList;
