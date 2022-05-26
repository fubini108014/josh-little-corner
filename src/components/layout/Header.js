import React from "react";
import { styled } from "@mui/material/styles";

const HeaderContainer = styled("div")({
  gridArea: "header",
  color: "#fff",
  backgroundColor: "#2e458f",
});
function Header() {
  return <HeaderContainer>Header</HeaderContainer>;
}

export default Header;
