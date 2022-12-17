import { AppBar, Box, Button, Typography, useMediaQuery } from "@mui/material";
import SearchBox from "./search-box";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../pages/_app";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const userSignedIn = Object.keys(user).length != 0;

  const matches = useMediaQuery("(min-width:600px)");

  const userButtons = (
    <>
      <Button variant="contained">
        <Link href="/register">register</Link>
      </Button>
      <Button variant="outlined">
        <Link href="/login">login</Link>
      </Button>
    </>
  );

  const userOptions = (
    <Box sx={{ textAlign: "center" }}>
      <Link href="/profile">
        <Typography>Hi, {user.name}</Typography>
      </Link>
      <Button
        onClick={() => {
          router.push("/");
          setUser({});
        }}
      >
        Log Out
      </Button>
    </Box>
  );

  return (
    <AppBar
      component="nav"
      sx={{
        p: 2,
        display: "flex",
        flexDirection: matches ? "row" : "column",
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
        {userSignedIn ? userOptions : userButtons}
      </Box>
    </AppBar>
  );
};

export default Navbar;
