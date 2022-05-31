import * as React from "react";
import { styled } from "@mui/material/styles";
import RedditIcon from "@mui/icons-material/Reddit";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { useNavigate } from "react-router-dom";

const LOGO = styled("div")({
  margin: "5px 10px",
  display: "flex",
  position: "absolute",
  top: 5,
  left: 10,
  alignItems: "center",
  "& svg": {
    marginRight: 5,
  },
});

const NavigateButton = styled("div")({
  position: "absolute",
  right: 20,
  top: 5,
  margin: "5px 10px",
  display: "flex",
  alignItems: "center",
  "& button": {
    color: "#fff",
    marginBottom: "4px !important",
    "&:hover": {
      backgroundColor: "rgb(255 255 255 / 12%)",
    },
  },
});

const IconDesc = styled("div")({
  position: "absolute",
  bottom: -6,
  fontSize: "13px",
  whiteSpace: "nowrap",
  fontFamily: '"Noto Sans TC", "微軟正黑體", "Noto Sans CJK TC"',
});

export const Logo = () => {
  return (
    <LOGO>
      <RedditIcon />
      Logo
    </LOGO>
  );
};

export const NavigateButtonGroup = () => {
  let navigate = useNavigate();
  return (
    <NavigateButton>
      <Stack direction="row" spacing={3}>
        <IconButton aria-label="about me" onClick={() => navigate("/about")}>
          <DeleteIcon />
          <IconDesc>關於我</IconDesc>
        </IconButton>
        <IconButton
          aria-label="work history"
          onClick={() => navigate("/experience")}
        >
          <WorkHistoryIcon />
          <IconDesc>學經歷</IconDesc>
        </IconButton>
        <IconButton aria-label="skill" onClick={() => navigate("/skill")}>
          <AddShoppingCartIcon />
          <IconDesc>技能</IconDesc>
        </IconButton>
        <IconButton
          aria-label="portfolio"
          onClick={() => navigate("/portfolio")}
        >
          <AddShoppingCartIcon />
          <IconDesc>作品集</IconDesc>
        </IconButton>
        <IconButton aria-label="home" onClick={() => navigate("/home")}>
          <HomeIcon />
          <IconDesc>首頁</IconDesc>
        </IconButton>
      </Stack>
    </NavigateButton>
  );
};
