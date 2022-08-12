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
        value={props.value}
        onChange={props.onChange}
        // ref={props.ref}
      />
    </div>
  );
}

export default TextInput;
