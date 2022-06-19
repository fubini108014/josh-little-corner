import React, { useState } from "react";
import MessageIcon from "@mui/icons-material/Message";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import ContactForm from "./ContactForm";

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
        <ContactForm />
      </Dialog>
    </>
  );
}

export default Contact;
