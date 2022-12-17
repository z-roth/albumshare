import { Box, CircularProgress, Typography } from "@mui/material";
import Navbar from "../../components/navbar";
import { useRouter } from "next/router";
import { getUserByUsername } from "../../services/users-service";
import UserDetails from "../../components/user-details";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../_app";

const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query;
  const { user } = useContext(UserContext);
  const isLoggedIn = Object.keys(user).length != 0;
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (router.isReady) {
      if (isLoggedIn && user.username == username) {
        router.push("/profile");
      }

      getUserByUsername(username)
        .then((res) => {
          setData(res);
          setIsLoading(false);
        })
        .catch(() => setIsError(true));
    }
  }, [username, isLoggedIn, router, user.username]);

  if (isError) {
    return (
      <Box>
        <Navbar />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ m: 4 }}>
            Could not find user with username {username}.
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <Navbar />
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            m: 4,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <UserDetails user={data} self={false} />
      )}
    </Box>
  );
};

export default UserProfile;
