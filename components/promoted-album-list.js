import PromotedAlbumCard from "./promoted-album-card";
import { Box, Typography } from "@mui/material";

const PromotedAlbumList = ({ albums }) => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
      }}
    >
      {albums?.length === 0 ? (
        <Typography>No albums to show at this time.</Typography>
      ) : (
        albums.map((album, idx) => (
          <PromotedAlbumCard album={album} key={idx} />
        ))
      )}
    </Box>
  );
};

export default PromotedAlbumList;
