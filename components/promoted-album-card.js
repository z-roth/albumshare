import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useRouter } from "next/router";
import ClearIcon from "@mui/icons-material/Clear";
import { useContext } from "react";
import { UserContext } from "../pages/_app";
import { deletePromotedAlbum } from "../services/albums-service";
import { useQueryClient } from "react-query";

const PromotedAlbumCard = ({ album }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { user } = useContext(UserContext);

  const handleDelete = () => {
    deletePromotedAlbum(album._id)
      .then(queryClient.invalidateQueries("albums"))
      .catch(() => alert("Error deleting album promotion."));
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        height="200px"
        width="200px"
        image={album.image}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6">
          <b>{album.title}</b>
        </Typography>
        <Typography>{album.artist}</Typography>
        <Link href={`/profile/${album.username}`}>
          <Typography color="primary">@{album.username}</Typography>
        </Link>
        {album.streamingLink && (
          <IconButton onClick={() => router.push(album.streamingLink)}>
            <PlayCircleIcon color="primary" fontSize="large" />
          </IconButton>
        )}
        {album.username == user.username && (
          <IconButton color="error" onClick={() => handleDelete()}>
            <ClearIcon />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};

export default PromotedAlbumCard;
