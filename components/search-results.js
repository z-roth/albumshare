import { Typography, Box, Grid } from "@mui/material";
import AlbumListItem from "./album-list-item";
import Link from "next/link";

const SearchResults = ({ searchString, albums }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      
        <Typography variant="h4">{`Search results for "${searchString}"`}</Typography>
        <Grid container alignItems="center" justifyContent="center">
          {albums.map((album, idx) => (
            // <p>{`${album}`}</p>
            <AlbumListItem album={album} key={idx} />
          ))}
        </Grid>
      
    </Box>
  );
};
export default SearchResults;
