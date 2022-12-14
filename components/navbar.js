import { AppBar, Box, Button, Typography } from "@mui/material";
import SearchBox from "./search-box";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <AppBar
      component="nav"
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "static",
      }}
      color=""
    >
      <Typography variant="h5" component="div">
        <Link href="/">
          <b>Albumshare</b>
        </Link>
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <SearchBox />
        <Button variant="contained">
          <Link href="/signup">signup</Link>
        </Button>
        <Button variant="outlined">
          <Link href="/login">login</Link>
        </Button>
      </Box>
    </AppBar>
  );
};

export default Navbar;
