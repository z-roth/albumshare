import { Box, Typography, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../_app";
import { getUserByUsername } from "../../services/users-service";
import Navbar from "../../components/navbar";
import UserDetails from "../../components/user-details";

const Profile = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const userSignedIn = Object.keys(user).length != 0;
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userSignedIn) {
      router.push("/");
    }
    getUserByUsername(user.username)
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, [router, user.username, userSignedIn]);

  if (isError) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <Navbar />
        <Typography variant="h4" sx={{ m: 4 }}>
          Error loading profile.
        </Typography>
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
        <UserDetails user={data} self={true} />
      )}
    </Box>
  );
};

export default Profile;
