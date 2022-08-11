import React from "react";
import TextField from "@mui/material/TextField";

function TextInput(props) {
  return (
    <div>
      <TextField
        label={props.label}
        variant="standard"
        rows={props.rows}
        type={props.type}
        multiline
        fullWidth
        margin="dense"
      />
    </div>
  );
}

export default TextInput;
