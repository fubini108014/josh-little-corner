import React from "react";
import { styled } from "@mui/material/styles";

const FooterContainer = styled("div")({
  gridArea: "footer",
  color: "#fff",
  backgroundColor: "#2e458f",
});

function Footer() {
  return <FooterContainer>Footer</FooterContainer>;
}

export default Footer;
