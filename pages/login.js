import {
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect, useContext } from "react";
import { login } from "../services/users-service.js";
import { useRouter } from "next/router";
import { UserContext } from "./_app.js";

const Login = () => {
  const [loginUser, setLoginUser] = useState({});
  const router = useRouter();
  const userContext = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginUser)
      .then((user) => {
        userContext.setUser(user);
        router.push("/profile");
      })
      .catch((e) => alert("Failed to log in with provided credentials."));
  };

  return (
    <Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mt: 8,
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Log In
        </Typography>
        <FormControl variant="outlined">
          <InputLabel>Username</InputLabel>
          <OutlinedInput
            type="text"
            onChange={(e) =>
              setLoginUser({ ...loginUser, username: e.target.value })
            }
            label="Username"
            required
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type="password"
            onChange={(e) =>
              setLoginUser({ ...loginUser, password: e.target.value })
            }
            label="Password"
            required
          />
        </FormControl>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
