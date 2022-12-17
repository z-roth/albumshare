import {
  Typography,
  Button,
  Modal,
  Card,
  FormControl,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../pages/_app";
import { createPromotedAlbum } from "../services/albums-service";
import { useQueryClient } from "react-query";

const CreateAlbumModal = ({ open, setClose }) => {
  const queryClient = useQueryClient();
  const { user } = useContext(UserContext);
  const [newAlbum, setNewAlbum] = useState({
    title: "",
    artist: user.name,
    username: user.username,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPromotedAlbum(newAlbum)
      .then((data) => {
        queryClient.invalidateQueries("albums");
        setClose();
      })
      .catch(() => alert("Error creating new album promotion."));
  };

  return (
    <Modal
      open={open}
      onClose={setClose}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        top: "25%",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          p: 2,
        }}
        component="form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Create New Album Promotion
        </Typography>
        <FormControl variant="outlined">
          <InputLabel>Album Title</InputLabel>
          <OutlinedInput
            type="text"
            label="Album Title"
            required
            onChange={(e) =>
              setNewAlbum({ ...newAlbum, title: e.target.value })
            }
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel>Image Link</InputLabel>
          <OutlinedInput
            type="text"
            label="Image Link"
            onChange={(e) =>
              setNewAlbum({ ...newAlbum, image: e.target.value })
            }
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel>Streaming Link</InputLabel>
          <OutlinedInput
            type="text"
            label="Streaming Link"
            onChange={(e) =>
              setNewAlbum({ ...newAlbum, streamingLink: e.target.value })
            }
          />
        </FormControl>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Card>
    </Modal>
  );
};

export default CreateAlbumModal;
