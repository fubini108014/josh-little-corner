import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const ProtfolioCardWrapper = styled("div")((props) => ({
  borderRadius: "3px",
  width: "250px",
  minHeight: "50px",
  position: "relative",
  display: "flex",
  cursor: "zoom-in",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  color: "#fff",
  margin: "5px",
  boxShadow:
    "0px 3px 3px -2px rgba(0, 0, 0, 0.32), 0px 3px 4px 0px rgba(0, 0, 0, 0.24), 0px 1px 8px 0px rgba(0, 0, 0, 0.2)",
  "&::after": {
    content: '""',
    display: "block",
    position: "absolute",
    opacity: 0,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    backgroundImage:
      "linear-gradient(to bottom,rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.111) 11.7%, rgba(0, 0, 0, 0.186) 22.1%, rgba(0, 0, 0, 0.234) 31.2%,rgba(0, 0, 0, 0.254) 39.4%,rgba(0, 0, 0, 0.321) 46.6%,rgba(0, 0, 0, 0.364) 53.1%,rgba(0, 0, 0, 0.4) 58.9%,rgba(0, 0, 0, 0.454) 64.3%,rgba(0, 0, 0, 0.508) 69.3%, rgba(0, 0, 0, 0.54) 74.1%,rgba(0, 0, 0, 0.607) 78.8%,rgba(0, 0, 0, 0.668) 83.6%,rgba(0, 0, 0, 0.721) 88.7%,rgba(0, 0, 0, 0.762) 94.1%,rgba(0, 0, 0, 0.79) 100%)",

    transition:
      "opacity calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1), -webkit-opacity calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1)",
  },
  "&:hover::after": {
    opacity: 1,
  },
  "&:hover .cardHoverDisplay": {
    display: "block",
  },
}));

const CardInfo = styled("div")({
  zIndex: 3,
  position: "absolute",
  bottom: "13px",
  left: "15px",
  color: "#FFF",
  display: "none",
});

export function ProtfolioCard({ image, title = "" }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <ProtfolioCardWrapper onClick={handleClickOpen}>
        <CardInfo className="cardHoverDisplay">hello~ This is {title}</CardInfo>
        <img
          src={image}
          srcSet={image}
          alt={title}
          loading="lazy"
          style={{
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            display: "block",
            width: "100%",
          }}
        />
      </ProtfolioCardWrapper>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(20)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
