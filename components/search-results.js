import { Typography, Box, Grid } from "@mui/material";
import AlbumListItem from "./album-card.js";
import Link from "next/link";

const SearchResults = ({ criteria, albums }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h4">{`Search results for "${criteria}"`}</Typography>
      <Grid container alignItems="center" justifyContent="center">
        {albums.map((album, idx) => (
          <AlbumListItem album={album} key={idx} />
        ))}
      </Grid>
    </Box>
  );
};
export default SearchResults;
