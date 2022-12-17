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
import { useState, useContext } from "react";
import { signup } from "../services/users-service.js";
import { useRouter } from "next/router";
import { UserContext } from "./_app.js";

const Register = () => {
  const [newUser, setNewUser] = useState({ isBandAccount: false });
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.password != confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    signup(newUser)
      .then((user) => {
        setUser(user);
        router.push("/profile");
      })
      .catch((e) => alert(e));
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
          Sign Up
        </Typography>
        <FormControl variant="outlined">
          <InputLabel>Username</InputLabel>
          <OutlinedInput
            type="text"
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
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
              setNewUser({ ...newUser, password: e.target.value })
            }
            label="Password"
            required
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel>Confirm Password</InputLabel>
          <OutlinedInput
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="Confirm Password"
            required
          />
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              onChange={() =>
                setNewUser({ ...newUser, isBandAccount: !newUser.isBandAccount })
              }
            />
          }
          label="Band Account?"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
