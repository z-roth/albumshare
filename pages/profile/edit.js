import { useContext, useEffect, useState } from "react";
import { UserContext } from "../_app";
import Navbar from "../../components/navbar";
import { useRouter } from "next/router";
import { CircularProgress, FormControl } from "@mui/material";
import {
  Box,
  OutlinedInput,
  Button,
  Typography,
  InputLabel,
} from "@mui/material";
import { getUserByUsername } from "../../services/users-service";
import { updateUser } from "../../services/users-service";

const EditProfile = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [updatedUser, setUpdatedUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const isLoggedIn = Object.keys(user).length != 0;

  useEffect(() => {
    if (router.isReady) {
      if (!isLoggedIn) {
        router.push("/");
      }

      getUserByUsername(user.username)
        .then((res) => {
          setUpdatedUser(res);
          setIsLoading(false);
        })
        .catch(() => setIsError(true));
    }
  }, [router.isReady, isLoggedIn, router, user.username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user.username, updatedUser)
      .then(() => {
        setUser(updatedUser);
        router.push("/profile");
      })
      .catch((err) => alert("Error updating user details."));
  };

  if (isError) {
    <Box sx={{ textAlign: "center" }}>
      <Navbar />
      <Typography variant="h4" sx={{ m: 4 }}>
        Error loading profile.
      </Typography>
    </Box>;
  }

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Box
            component="form"
            onSubmit={(e) => handleSubmit(e)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              mt: 8,
            }}
          >
            <Typography variant="h3">Edit Profile</Typography>
            <FormControl variant="outlined">
              <InputLabel>Name</InputLabel>
              <OutlinedInput
                type="text"
                onChange={(e) =>
                  setUpdatedUser({ ...user, name: e.target.value })
                }
                label="Name"
                required
                defaultValue={updatedUser.name}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Email</InputLabel>
              <OutlinedInput
                type="email"
                onChange={(e) =>
                  setUpdatedUser({ ...user, email: e.target.value })
                }
                label="Email"
                defaultValue={user.email}
              />
            </FormControl>
            <FormControl>
              <InputLabel>Phone</InputLabel>
              <OutlinedInput
                type="tel"
                onChange={(e) =>
                  setUpdatedUser({ ...user, phone: e.target.value })
                }
                label="Phone"
                defaultValue={user.phone}
              />
            </FormControl>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default EditProfile;
