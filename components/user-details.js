import { Box, Typography, CircularProgress, Button } from "@mui/material";
import { useQuery } from "react-query";
import { getReviewsForUser } from "../services/reviews-service";
import { getPromotedAlbumsForUser } from "../services/albums-service";
import ReviewsList from "./reviews-list.js";
import PromotedAlbumsList from "./promoted-album-list";
import Link from "next/link";
import { useState } from "react";
import CreateAlbumModal from "./create-album-modal";

const UserDetails = ({ user, self }) => {
  const [open, setOpen] = useState(false);
  const query = {
    queryKey: [user.isBandAccount ? "albums" : "reviews", user.username],
    queryFn: user.isBandAccount ? getPromotedAlbumsForUser : getReviewsForUser,
  };

  const { data, isLoading } = useQuery(query);

  const handleNewAlbum = () => {
    setOpen(true);
  };

  const personalData = user.isBandAccount ? (
    <PromotedAlbumsList albums={data} />
  ) : (
    <ReviewsList reviews={data} />
  );

  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h2">{user.name ? user.name : "User"}</Typography>
      <Typography variant="h4">@{user.username}</Typography>
      {self && (
        <>
          {user.phone && (
            <Typography>Your Phone Number: {user.phone}</Typography>
          )}
          {user.email && <Typography>Your Email: {user.email}</Typography>}{" "}
          <Link href="/profile/edit">
            <Button variant="contained" sx={{ m: 2 }}>
              Edit Profile
            </Button>
          </Link>
          {user.isBandAccount && (
            <Button variant="contained" onClick={() => handleNewAlbum()}>
              Create New Album Promotion
            </Button>
          )}
        </>
      )}
      <Typography variant="h4" sx={{ m: 2 }}>
        {user.name}
        {`'`}s {user.isBandAccount ? "Promoted Albums" : "Reviews"}
      </Typography>
      {isLoading ? <CircularProgress /> : personalData}
      <CreateAlbumModal open={open} setClose={() => setOpen(false)} />
    </Box>
  );
};

export default UserDetails;
