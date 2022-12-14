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
  const [searchString, setSearchString] = useState("");

  const handleSubmit = () => {
    if (searchString != "") {
      router.push({ pathname: "/search", query: { searchString } });
      setSearchString("");
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
          console.log(`Pressed keyCode ${ev.key}`);
          if (ev.key === "Enter") {
            handleSubmit();
            ev.preventDefault();
          }
        }}
        onChange={(e) => setSearchString(e.target.value)}
      ></OutlinedInput>
    </FormControl>
  );
};

export default SearchBar;
