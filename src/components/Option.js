import React from "react";
import Button from "@mui/material/Button";

function Option({ option, selectOption, index }) {
  return (
    <Button
      variant="contained"
      className="answer"
      onClick={() => {
        selectOption(index);
      }}
    >
      {option}
    </Button>
  );
}

export default Option;
