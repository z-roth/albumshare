import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

const ReviewCardInfo = ({ review }) => {
  return (
    <Card sx={{ boxShadow: 3, maxWidth: "500px" }}>
      <CardContent>
        <Typography variant="h6">
          <b>{review.content}</b>
        </Typography>
        <Typography variant="h5" color="primary">
          <b>{review.rating}/10</b>
        </Typography>
        <Link href={`/profile/${review.username}`}>
          <Typography  color="primary">
            @{review.username}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ReviewCardInfo;
