import React, { Fragment, useEffect, useState } from "react";
import Results from "../results/Results";

import axios from "axios";

import { SearchStateProps, Images } from "../../helpers/types";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const API_KEY: string = "29272984-79ded85535289c5dd54020dea";

const Search = (): JSX.Element => {
  const [state, setState] = useState<SearchStateProps>({
    text: "",
    amount: "",
  });

  const [images, setImages] = useState<Images[]>([]);

  useEffect((): void => {
    if (state.amount.length === 0) return;

    axios
      .get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${state.text}&image_type=photo&per_page=${state.amount}&safesearch=true`
      )
      .then((res) => setImages(res.data.hits));
  }, [state]);

  const changeText = (some: string): void => {
    setState({ ...state, text: some });
  };

  const changeNumber = (e: SelectChangeEvent): void => {
    setState({ ...state, amount: e.target.value });
  };

  return (
    <Fragment>
      <Box sx={{ minWidth: 400 }}>
        <TextField
          label="Search For Images"
          sx={{ margin: 3, width: 400 }}
          value={state.text}
          onChange={(e) => changeText(e.target.value)}
        />

        <FormControl sx={{ margin: 3, minWidth: 400 }}>
          <InputLabel id="demo-simple-select-label">
            Amounf of Images
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.amount}
            label="Amounf of Images"
            onChange={changeNumber}
          >
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={15}>Fifteen</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {images.length > 0 ? <Results images={images} /> : ""}
    </Fragment>
  );
};

export default Search;
