"use client";

import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { search } from "@/utils/search";

const SearchBar: React.FC = () => {
  const router = useRouter();

  const [term, setTerm] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  const onEnterSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.key === "Enter") {
      router.push(`/${search(term)}`);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, m: 2 }}>
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
      <Button
        onClick={(_) => router.push(`/${search(term)}`)}
        variant="contained"
        color="info"
      >
        {"Search Pokemon!"}
      </Button>
    </Box>
  );
};

export default SearchBar;
