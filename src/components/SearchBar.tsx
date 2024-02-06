import { Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onSearch(e.target.value);
  };

  return (
    <Box sx={{ m: 2 }}>
      <FormControl variant="standard">
        <InputLabel>{"Search Pokemon"}</InputLabel>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
