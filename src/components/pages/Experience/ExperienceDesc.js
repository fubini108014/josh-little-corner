import React from "react";
import { styled } from "@mui/material/styles";

const ExperienceInfo = styled("div")({
  position: "absolute",
  bottom: "200px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "60%",
  background: "#1414142e",
  backdropFilter: "blur(15px)",
  padding: "10px",
  border: "1px solid #d7d3d396",
  borderRadius: "5px",
  boxShadow: "0px 2px 3px 0px #292828",
  userSelect: "none",
  "@media screen and (max-width: 750px)": {
    width: "98%",
  },
});

function ExperienceDesc({ dataSource = null }) {
  if (!dataSource) return null;

  const {
    company = "",
    companyInfo = "",
    content = [],
    date = "",
    position = "",
  } = dataSource;

  return (
    <ExperienceInfo>
      <div>date: {date}</div>
      <div>companyInfo: {companyInfo}</div>
      <div>position: {position}</div>
      <div>company: {company}</div>
      content:
      {content.map((item, idx) => (
        <div key={idx}>
          {idx + 1}. {item.main} {item.sub ? `(${item.sub})` : ""}
        </div>
      ))}
    </ExperienceInfo>
  );
}

export default ExperienceDesc;
