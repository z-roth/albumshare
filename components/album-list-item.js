import { Typography, Box, Grid, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const AlbumListItem = ({ album }) => {
  console.log(album);

  return (
    <Grid
      item
      sx={{
        m: 2,
        p: 2,
      }}
      xs={12}
      sm={6}
      md={4}
      lg={3}
    >
      <Link href="/details/:">
        <Image
          src={
            album.image[3][`#text`] ||
            "https://upload.wikimedia.org/wikipedia/commons/3/3c/No-album-art.png"
          }
          width="124"
          height="124"
        />
        <Box>
          <Typography variant="h6" sx={{ p: 0 }}>
            <b>{album.name}</b>
          </Typography>
          <Typography>{album.artist}</Typography>
        </Box>
      </Link>
    </Grid>
  );
};

export default AlbumListItem;
