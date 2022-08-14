import React from "react";

import { Images } from "../../helpers/types";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const Results = ({ images }: { images: Images[] }): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {images.map((item) => {
          return (
            <Grid item xs={4} key={item.id}>
              <Item>
                <img
                  src={item.largeImageURL}
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  alt="Images"
                />
                <Div>{item.tags}</Div>

                <Div>By: {item.user}</Div>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Results;
