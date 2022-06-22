import React, { useState } from "react";
import MessageIcon from "@mui/icons-material/Message";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import ContactForm from "./ContactForm";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const ContactIcon = styled(IconButton)({
  position: "absolute",
  zIndex: 20,
  bottom: 10,
  right: 10,
});

function Contact() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <ContactIcon onClick={handleOpen}>
        <MessageIcon />
      </ContactIcon>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          與我聯繫
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <ContactForm onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Contact;
