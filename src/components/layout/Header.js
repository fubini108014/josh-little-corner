import * as React from "react";
import { styled } from "@mui/material/styles";
import RedditIcon from "@mui/icons-material/Reddit";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { useNavigate } from "react-router-dom";
import AssignmentIndSharpIcon from "@mui/icons-material/AssignmentIndSharp";
import ConstructionIcon from "@mui/icons-material/Construction";
import CottageIcon from "@mui/icons-material/Cottage";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const LOGO = styled("div")({
  margin: "5px 10px",
  display: "flex",
  position: "absolute",
  top: 10,
  left: 10,
  alignItems: "center",
  color: "#fff",
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
  zIndex: 10,
  "& button": {
    color: "#e4e6eb",
    marginBottom: "4px !important",
    backgroundColor: "rgb(255 255 255 / 10%)",
    boxShadow: "inset -1px 2px 3px -2px #fff",
    "&:hover": {
      backgroundColor: "rgb(255 255 255 / 10%)",
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
      <Stack direction="row" spacing={{ xs: 1, sm: 3 }}>
        <IconButton aria-label="about me" onClick={() => navigate("/about")}>
          <AssignmentIndSharpIcon />
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
          <ConstructionIcon />
          <IconDesc>技能</IconDesc>
        </IconButton>
        <IconButton
          aria-label="portfolio"
          onClick={() => navigate("/portfolio")}
        >
          <LibraryBooksIcon />
          <IconDesc>作品集</IconDesc>
        </IconButton>
        <IconButton aria-label="home" onClick={() => navigate("/home")}>
          <CottageIcon />
          <IconDesc>首頁</IconDesc>
        </IconButton>
      </Stack>
    </NavigateButton>
  );
};
