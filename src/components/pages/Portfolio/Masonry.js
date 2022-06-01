import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

import { ProtfolioCard } from "./PortfolioCard";
import { portfolioList } from "../../../data/portfolioSource";

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
        {portfolioList.map((item, index) => (
          <ProtfolioCard image={item.img} title={item.title} key={index} />
        ))}
      </Masonry>
    </Box>
  );
}
