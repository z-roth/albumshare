import {
  Typography,
  Box,
  Grid,
  Card,
  ButtonBase,
  CardMedia,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const AlbumListItem = ({ album }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "/details",
      query: { artist: album.artist, title: album.name },
    });
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <ButtonBase onClick={() => handleClick()}>
        <Card
          sx={{
            m: 2,
            p: 2,
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            image={
              album.image[3][`#text`] ||
              "https://upload.wikimedia.org/wikipedia/commons/3/3c/No-album-art.png"
            }
          />
          <CardContent>
            <Typography variant="h6" sx={{ p: 0 }}>
              <b>{album.name}</b>
            </Typography>
            <Typography>{album.artist}</Typography>
          </CardContent>
        </Card>
      </ButtonBase>
    </Grid>
  );
};

export default AlbumListItem;
