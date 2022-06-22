// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useEffect } from "react";
import { useForm } from "@formspree/react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";

const FormContainer = styled("div")({
  width: "100%",
  //height: "500px",
});
function ContactForm({ onClose = () => {} }) {
  const [state, handleSubmit] = useForm("meqnwqnd");

  useEffect(() => {
    if (state.succeeded) {
      onClose();

      Swal.fire({
        title: "訊息發送成功",
        text: "感謝您的聯繫，我會盡快回覆您!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.errors.length > 0) {
      onClose();

      Swal.fire({
        icon: "error",
        title: "訊息發送失敗",
        text: "您的訊息無法順利寄出，請重新發送!!",
      });
    }
  }, [state.errors]);

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email"
          name="email"
          type="email"
          fullWidth
          placeholder="請輸入Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          sx={{ m: "8px 0px" }}
          focused
        />
        <TextField
          id="message"
          label="Message"
          name="message"
          placeholder="請輸入內容"
          multiline
          fullWidth
          rows={5}
          sx={{ m: "8px 0px" }}
          focused
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ m: "8px 0px", width: 100, float: "right" }}
        >
          送出
        </Button>
      </form>
    </FormContainer>
  );
}

export default ContactForm;
