import {
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = () => {
    if (password != confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
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
        onSubmit={() => handleSubmit()}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Sign Up
        </Typography>
        <FormControl variant="outlined">
          <InputLabel>Username</InputLabel>
          <OutlinedInput
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            required
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            required
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel>Confirm Password</InputLabel>
          <OutlinedInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            label="Confirm Password"
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

export default Signup;
