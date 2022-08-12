import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextInput from "./TextInput";

function FormDialog(props) {
  // const nameRef = useRef("");
  // const emailRef = useRef("");
  // const messageRef = useRef("");

  // const name = nameRef.current.value;
  // const email = emailRef.current.value;
  // const message = messageRef.current.value;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const url = "";
 
  function submitForm() {

    const payload = {
      text:
        "Inquiry Notification\n" +
        "name:" + name + "\n" +
        "email:" + email + "\n" +
        "message:\n" + message,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then(() => {
      alert(
        "Thank you for getting in touch! \n we will get back in touch with you soon!"
      );
      return props.handleCloseInquiry();

    });
  }


  return (
    <Dialog
      open={props.openInquiry}
      onClose={props.handleCloseInquiry}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Inquiry Form</DialogTitle>
      <DialogContent>
        <TextInput
          label="Your Name"
          rows={1}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Your E-mail Address"
          rows={1}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextInput
          label="Leave Your Message"
          rows={4}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleCloseInquiry}>Cancel</Button>
        <Button onClick={submitForm}>Send</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;
