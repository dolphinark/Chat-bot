import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextInput from "./TextInput";

function FormDialog(props) {
  return (
    <Dialog
      open={props.openInquiry}
      onClose={props.handleCloseInquiry}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Inquiry Form</DialogTitle>
      <DialogContent>
        <TextInput label="Your Name" rows={1} type="text" />
        <TextInput label="Your E-mail Address" rows={1} type="email" />
        <TextInput label="Leave Your Message" rows={4} />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleCloseInquiry}>Cancel</Button>
        <Button onClick={props.handleCloseInquiry} autoFocus>
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;
