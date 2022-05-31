import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { styled } from "@mui/material/styles";

const SpeedDialContainer = styled("div")({
  position: "absolute",
  bottom: 10,
  left: 10,
});

const actions = [
  { icon: <FileCopyIcon />, name: "與我聯繫" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "簡歷下載" },
];

export function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
