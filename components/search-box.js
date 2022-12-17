import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [criteria, setcriteria] = useState("");

  const handleSubmit = () => {
    if (criteria != "") {
      router.push({ pathname: "/search", query: { criteria } });
      setcriteria("");
    }
  };

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="search-box">Search for an album...</InputLabel>
      <OutlinedInput
        id="search-box"
        sx={{ h: 1 }}
        type="search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        label="Search for an album..."
        onKeyPress={(ev) => {
          if (ev.key === "Enter") {
            handleSubmit();
            ev.preventDefault();
          }
        }}
        onChange={(e) => setcriteria(e.target.value)}
      ></OutlinedInput>
    </FormControl>
  );
};

export default SearchBar;
