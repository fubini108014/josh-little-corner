import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import animal01 from "../../../images/animal01.jpg";
import animal02 from "../../../images/animal02.jpg";
import { ProtfolioCard } from "./PortfolioCard";

export default function ImageMasonry() {
  return (
    <Box
      sx={{
        mt: 8,
        width: 700,
        "@media screen and (max-width: 750px)": {
          width: "100%",
        },
        minHeight: 829,
      }}
    >
      <Masonry columns={{ xs: 2, sm: 3 }} spacing={{ xs: 1, sm: 2 }}>
        {itemData.map((item, index) => (
          <ProtfolioCard image={item.img} title={item.title} key={index} />
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: animal02,
    title: "Fern",
  },
  {
    img: animal01,
    title: "Snacks",
  },
  {
    img: animal01,
    title: "Mushrooms",
  },
  {
    img: animal01,
    title: "Tower",
  },
  {
    img: animal01,
    title: "Sea star",
  },
  {
    img: animal02,
    title: "Honey",
  },
  {
    img: animal02,
    title: "Basketball",
  },
  {
    img: animal02,
    title: "Breakfast",
  },
  {
    img: animal02,
    title: "Tree",
  },
  {
    img: animal02,
    title: "Burger",
  },
  {
    img: animal02,
    title: "Camera",
  },
  {
    img: animal02,
    title: "Coffee",
  },
  {
    img: animal01,
    title: "Camping Car",
  },
  {
    img: animal01,
    title: "Hats",
  },
  {
    img: animal01,
    title: "Tomato basil",
  },
  {
    img: animal01,
    title: "Mountain",
  },
  {
    img: animal01,
    title: "Bike",
  },
];
