import { Search } from "@mui/icons-material";
import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { ChangeEvent, KeyboardEvent, useState } from "react";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [term, setTerm] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  const onEnterSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.key === "Enter") {
      onSearch(term);
    }
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
          onKeyUp={onEnterSearch}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
