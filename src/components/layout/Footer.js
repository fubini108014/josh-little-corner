import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LineIcon from "../../assets/icon/LineIcon";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import FacebookIcon from "@mui/icons-material/Facebook";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const SpeedDialContainer = styled("div")({
  position: "absolute",
  zIndex: 20,
  bottom: 10,
  left: 10,
});

const actions = [
  { icon: <EmailIcon />, name: "Email" },
  { icon: <InstagramIcon />, name: "Instagram" },
  { icon: <FacebookIcon />, name: "Facebook" },
  { icon: <LineIcon />, name: "Line" },
  { icon: <PictureAsPdfIcon />, name: "簡歷表" },
];

export function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isMobile = useMediaQuery("(max-width:685px)");
  if (isMobile) return null;
  return (
    <SpeedDialContainer>
      <Box sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: "absolute", bottom: 16, left: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={handleClose}
              tooltipPlacement="right"
            />
          ))}
        </SpeedDial>
      </Box>
    </SpeedDialContainer>
  );
}
